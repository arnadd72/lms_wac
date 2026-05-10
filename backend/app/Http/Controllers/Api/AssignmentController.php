<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Assignment;
use App\Models\Submission;
use App\Models\SubmissionFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AssignmentController extends Controller
{
    /**
     * Get assignment detail with rubric.
     */
    public function show(string $lessonId)
    {
        $assignment = Assignment::with('attachments')
            ->where('lesson_id', $lessonId)
            ->firstOrFail();

        $mySubmissions = Submission::with('files')
            ->where('assignment_id', $assignment->id)
            ->where('user_id', auth()->id() ?? 1)
            ->orderByDesc('submitted_at')
            ->get();

        return response()->json([
            'assignment' => $assignment,
            'my_submissions' => $mySubmissions,
            'can_submit' => $mySubmissions->count() < $assignment->max_submissions,
        ]);
    }

    /**
     * Submit assignment with file uploads.
     */
    public function submit(Request $request, string $assignmentId)
    {
        $assignment = Assignment::findOrFail($assignmentId);

        $request->validate([
            'note' => 'nullable|string|max:1000',
            'files' => 'required|array|min:1|max:3',
            'files.*' => 'file|mimes:xlsx,docx,pptx,pdf,png,jpg,jpeg|max:25600', // 25MB
        ]);

        $submission = Submission::create([
            'assignment_id' => $assignment->id,
            'user_id' => auth()->id() ?? 1,
            'note' => $request->note,
            'is_late' => $assignment->deadline ? now()->isAfter($assignment->deadline) : false,
            'status' => 'submitted',
        ]);

        foreach ($request->file('files') as $file) {
            $path = $file->store('submissions/' . $assignment->id, 'public');
            SubmissionFile::create([
                'submission_id' => $submission->id,
                'filename' => $file->getClientOriginalName(),
                'file_url' => $path,
                'file_size' => $file->getSize(),
                'file_type' => $file->getClientMimeType(),
            ]);
        }

        return response()->json([
            'message' => 'Tugas berhasil dikumpulkan.',
            'submission' => $submission->load('files'),
        ], 201);
    }
}
