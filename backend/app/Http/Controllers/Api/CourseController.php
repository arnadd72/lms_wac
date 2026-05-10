<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\CourseOutcome;
use App\Models\CoursePrerequisite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CourseController extends Controller
{
    /**
     * Display a listing of the courses (Instructor CMS).
     */
    public function index(Request $request)
    {
        // For phase 2, we just return all courses or instructor's courses
        // Assume auth is handled or we pass instructor_id for now
        $query = Course::with('category')->withCount(['modules', 'outcomes', 'prerequisites']);
        
        if ($request->has('instructor_id')) {
            $query->where('instructor_id', $request->instructor_id);
        }

        return response()->json($query->latest()->get());
    }

    /**
     * Store a newly created course in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'instructor_id' => 'required|exists:users,id',
            'category_id' => 'required|exists:categories,id',
            'title' => 'required|string|max:80',
            'short_description' => 'required|string|max:200',
            'description' => 'required|string',
            'level' => 'required|in:beginner,intermediate,advanced',
            'language' => 'nullable|string|max:10',
            'status' => 'nullable|in:draft,pending_review,published,archived',
            'visibility' => 'nullable|in:public,unlisted,private',
            'certificate_enabled' => 'nullable|boolean',
            'outcomes' => 'nullable|array',
            'prerequisites' => 'nullable|array',
        ]);

        $validated['slug'] = Str::slug($validated['title']) . '-' . uniqid();
        if (!isset($validated['status'])) $validated['status'] = 'draft';
        if (!isset($validated['visibility'])) $validated['visibility'] = 'public';

        $course = Course::create($validated);

        if ($request->has('outcomes')) {
            foreach ($request->outcomes as $index => $outcome) {
                CourseOutcome::create([
                    'course_id' => $course->id,
                    'outcome' => $outcome,
                    'sort_order' => $index
                ]);
            }
        }

        if ($request->has('prerequisites')) {
            foreach ($request->prerequisites as $index => $prereq) {
                CoursePrerequisite::create([
                    'course_id' => $course->id,
                    'prerequisite' => $prereq,
                    'sort_order' => $index
                ]);
            }
        }

        return response()->json($course->load(['outcomes', 'prerequisites']), 201);
    }

    /**
     * Display the specified course.
     */
    public function show(string $id)
    {
        $course = Course::with(['category', 'outcomes', 'prerequisites', 'modules.lessons'])->findOrFail($id);
        return response()->json($course);
    }

    /**
     * Update the specified course in storage.
     */
    public function update(Request $request, string $id)
    {
        $course = Course::findOrFail($id);
        $validated = $request->validate([
            'category_id' => 'sometimes|exists:categories,id',
            'title' => 'sometimes|string|max:80',
            'short_description' => 'sometimes|string|max:200',
            'description' => 'sometimes|string',
            'level' => 'sometimes|in:beginner,intermediate,advanced',
            'language' => 'sometimes|string|max:10',
            'status' => 'sometimes|in:draft,pending_review,published,archived',
            'visibility' => 'sometimes|in:public,unlisted,private',
            'certificate_enabled' => 'sometimes|boolean',
        ]);

        $course->update($validated);
        return response()->json($course);
    }

    /**
     * Upload course thumbnail.
     */
    public function uploadThumbnail(Request $request, string $id)
    {
        $course = Course::findOrFail($id);
        $request->validate(['thumbnail' => 'required|image|max:2048']);

        if ($course->thumbnail) {
            Storage::disk('public')->delete($course->thumbnail);
        }

        $path = $request->file('thumbnail')->store('thumbnails', 'public');
        $course->update(['thumbnail' => $path]);

        return response()->json(['thumbnail_url' => asset('storage/' . $path)]);
    }

    /**
     * Remove the specified course from storage.
     */
    public function destroy(string $id)
    {
        $course = Course::findOrFail($id);
        // Handle thumbnail deletion
        if ($course->thumbnail) {
            Storage::disk('public')->delete($course->thumbnail);
        }
        $course->delete();
        return response()->json(['message' => 'Course deleted successfully']);
    }
}
