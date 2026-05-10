<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Quizzes
        Schema::create('quizzes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('lesson_id')->constrained('lessons')->onDelete('cascade');
            $table->string('title', 200);
            $table->text('instructions')->nullable();
            $table->tinyInteger('pass_score')->default(75);
            $table->tinyInteger('max_attempts')->default(3);
            $table->integer('time_limit')->nullable();
            $table->boolean('shuffle_questions')->default(false);
            $table->boolean('shuffle_answers')->default(false);
            $table->boolean('show_result_immediately')->default(true);
            $table->boolean('allow_review')->default(true);
            $table->timestamp('created_at')->useCurrent();
        });

        // Quiz Questions
        Schema::create('quiz_questions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('quiz_id')->constrained('quizzes')->onDelete('cascade');
            $table->text('question_text');
            $table->string('question_image', 500)->nullable();
            $table->enum('type', ['multiple_choice', 'multiple_select', 'true_false', 'fill_blank', 'matching', 'short_answer', 'ordering', 'image_based']);
            $table->text('explanation')->nullable();
            $table->tinyInteger('points')->default(1);
            $table->integer('sort_order')->default(0);
        });

        // Quiz Options
        Schema::create('quiz_options', function (Blueprint $table) {
            $table->id();
            $table->foreignId('question_id')->constrained('quiz_questions')->onDelete('cascade');
            $table->text('option_text');
            $table->boolean('is_correct')->default(false);
            $table->integer('sort_order')->default(0);
        });

        // Quiz Attempts
        Schema::create('quiz_attempts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('quiz_id')->constrained('quizzes');
            $table->decimal('score', 5, 2);
            $table->decimal('max_score', 5, 2);
            $table->decimal('score_pct', 5, 2);
            $table->boolean('passed');
            $table->integer('time_spent')->nullable();
            $table->timestamp('started_at')->useCurrent();
            $table->timestamp('submitted_at')->nullable();
            $table->index(['user_id', 'quiz_id']);
        });

        // Quiz Attempt Answers
        Schema::create('quiz_attempt_answers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('attempt_id')->constrained('quiz_attempts')->onDelete('cascade');
            $table->foreignId('question_id')->constrained('quiz_questions');
            $table->json('selected_options')->nullable();
            $table->text('text_answer')->nullable();
            $table->boolean('is_correct')->nullable();
            $table->decimal('points_earned', 5, 2)->default(0);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('quiz_attempt_answers');
        Schema::dropIfExists('quiz_attempts');
        Schema::dropIfExists('quiz_options');
        Schema::dropIfExists('quiz_questions');
        Schema::dropIfExists('quizzes');
    }
};
