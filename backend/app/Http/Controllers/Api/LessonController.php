<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use Illuminate\Http\Request;

class LessonController extends Controller
{
    /**
     * Store a newly created lesson in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'module_id' => 'required|exists:modules,id',
            'title' => 'required|string|max:200',
            'type' => 'required|in:video,article,document,quiz,assignment',
            'content' => 'nullable|string',
            'video_url' => 'nullable|string|max:500',
            'video_duration' => 'nullable|integer',
            'is_preview' => 'nullable|boolean',
            'is_required' => 'nullable|boolean',
            'sort_order' => 'nullable|integer',
        ]);

        if (!isset($validated['sort_order'])) {
            $maxOrder = Lesson::where('module_id', $validated['module_id'])->max('sort_order');
            $validated['sort_order'] = $maxOrder !== null ? $maxOrder + 1 : 0;
        }

        $lesson = Lesson::create($validated);
        return response()->json($lesson, 201);
    }

    /**
     * Update the specified lesson in storage.
     */
    public function update(Request $request, string $id)
    {
        $lesson = Lesson::findOrFail($id);
        $validated = $request->validate([
            'title' => 'sometimes|string|max:200',
            'type' => 'sometimes|in:video,article,document,quiz,assignment',
            'content' => 'nullable|string',
            'video_url' => 'nullable|string|max:500',
            'video_duration' => 'nullable|integer',
            'is_preview' => 'nullable|boolean',
            'is_required' => 'nullable|boolean',
            'sort_order' => 'sometimes|integer',
        ]);

        $lesson->update($validated);
        return response()->json($lesson);
    }

    /**
     * Remove the specified lesson from storage.
     */
    public function destroy(string $id)
    {
        $lesson = Lesson::findOrFail($id);
        $lesson->delete();
        return response()->json(['message' => 'Lesson deleted successfully']);
    }
}
