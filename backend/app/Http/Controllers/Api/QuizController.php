<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Quiz;
use App\Models\QuizAttempt;
use App\Models\QuizAttemptAnswer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QuizController extends Controller
{
    /**
     * Get quiz with questions & options for a lesson.
     */
    public function show(string $lessonId)
    {
        $quiz = Quiz::with(['questions.options'])
            ->where('lesson_id', $lessonId)
            ->firstOrFail();

        // Shuffle if configured
        if ($quiz->shuffle_questions) {
            $quiz->questions = $quiz->questions->shuffle();
        }

        // Hide correct_answer flag from client before submission
        $quiz->questions->each(function ($q) use ($quiz) {
            $q->options->each(function ($opt) { unset($opt->is_correct); });
        });

        // Attempt count for this user
        $attemptCount = QuizAttempt::where('quiz_id', $quiz->id)
            ->where('user_id', auth()->id())
            ->count();

        return response()->json([
            'quiz' => $quiz,
            'attempts_used' => $attemptCount,
            'can_attempt' => $quiz->max_attempts === 0 || $attemptCount < $quiz->max_attempts,
        ]);
    }

    /**
     * Submit a quiz attempt and calculate score.
     */
    public function submit(Request $request, string $quizId)
    {
        $quiz = Quiz::with(['questions.options'])->findOrFail($quizId);

        $validated = $request->validate([
            'answers' => 'required|array',
            'answers.*.question_id' => 'required|integer',
            'answers.*.selected_options' => 'nullable|array',
            'answers.*.text_answer' => 'nullable|string',
            'time_spent' => 'nullable|integer',
        ]);

        $totalPoints = 0;
        $earnedPoints = 0;
        $answerResults = [];

        foreach ($quiz->questions as $question) {
            $totalPoints += $question->points;
            $userAnswer = collect($validated['answers'])
                ->firstWhere('question_id', $question->id);

            $isCorrect = false;
            $pointsEarned = 0;

            if ($userAnswer && in_array($question->type, ['multiple_choice', 'true_false'])) {
                $correctOption = $question->options->where('is_correct', true)->first();
                $selected = $userAnswer['selected_options'][0] ?? null;
                $isCorrect = $correctOption && (int)$selected === $correctOption->id;
            } elseif ($userAnswer && $question->type === 'multiple_select') {
                $correctIds = $question->options->where('is_correct', true)->pluck('id')->sort()->values()->toArray();
                $selectedIds = collect($userAnswer['selected_options'] ?? [])->map(fn($v) => (int)$v)->sort()->values()->toArray();
                $isCorrect = $correctIds === $selectedIds;
            }

            if ($isCorrect) {
                $pointsEarned = $question->points;
                $earnedPoints += $pointsEarned;
            }

            $answerResults[] = [
                'question_id' => $question->id,
                'selected_options' => $userAnswer['selected_options'] ?? null,
                'text_answer' => $userAnswer['text_answer'] ?? null,
                'is_correct' => $isCorrect,
                'points_earned' => $pointsEarned,
                'explanation' => $quiz->allow_review ? $question->explanation : null,
                'correct_options' => $quiz->allow_review ? $question->options->where('is_correct', true)->pluck('id') : null,
            ];
        }

        $scorePct = $totalPoints > 0 ? round(($earnedPoints / $totalPoints) * 100, 2) : 0;
        $passed = $scorePct >= $quiz->pass_score;

        $attempt = QuizAttempt::create([
            'user_id' => auth()->id() ?? 1, // temp: fallback to 1 for dev
            'quiz_id' => $quiz->id,
            'score' => $earnedPoints,
            'max_score' => $totalPoints,
            'score_pct' => $scorePct,
            'passed' => $passed,
            'time_spent' => $validated['time_spent'] ?? null,
            'submitted_at' => now(),
        ]);

        foreach ($answerResults as $ans) {
            QuizAttemptAnswer::create([
                'attempt_id' => $attempt->id,
                'question_id' => $ans['question_id'],
                'selected_options' => $ans['selected_options'],
                'text_answer' => $ans['text_answer'],
                'is_correct' => $ans['is_correct'],
                'points_earned' => $ans['points_earned'],
            ]);
        }

        return response()->json([
            'attempt_id' => $attempt->id,
            'score' => $earnedPoints,
            'max_score' => $totalPoints,
            'score_pct' => $scorePct,
            'passed' => $passed,
            'pass_score' => $quiz->pass_score,
            'answers' => $quiz->show_result_immediately ? $answerResults : [],
        ]);
    }
}
