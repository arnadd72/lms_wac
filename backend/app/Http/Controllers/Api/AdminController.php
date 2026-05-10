<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Course;
use App\Models\Enrollment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    public function dashboardStats()
    {
        $totalUsers = User::count();
        $totalCourses = Course::count();
        $activeCourses = Course::where('status', 'published')->count();
        $totalEnrollments = Enrollment::count();
        
        // Enrollment trend last 30 days
        $enrollmentTrend = Enrollment::select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as count'))
            ->where('created_at', '>=', now()->subDays(30))
            ->groupBy('date')
            ->get();

        return response()->json([
            'metrics' => [
                'total_users' => $totalUsers,
                'total_courses' => $totalCourses,
                'active_courses' => $activeCourses,
                'total_enrollments' => $totalEnrollments,
                'completion_rate' => 65, // Mocked for now
            ],
            'trends' => $enrollmentTrend
        ]);
    }

    public function users(Request $request)
    {
        $users = User::query()
            ->when($request->search, function($q, $search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            })
            ->when($request->role, function($q, $role) {
                $q->where('role', $role);
            })
            ->latest()
            ->paginate($request->per_page ?? 10);

        return response()->json($users);
    }

    public function courses(Request $request)
    {
        $courses = Course::with('instructor:id,name')
            ->when($request->search, function($q, $search) {
                $q->where('title', 'like', "%{$search}%");
            })
            ->when($request->status, function($q, $status) {
                $q->where('status', $status);
            })
            ->latest()
            ->paginate($request->per_page ?? 10);

        return response()->json($courses);
    }

    public function updateCourseStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:published,rejected,archived',
            'feedback' => 'nullable|string'
        ]);

        $course = Course::findOrFail($id);
        $course->update(['status' => $request->status]);

        // In a real app, send notification to instructor here

        return response()->json([
            'message' => "Course status updated to {$request->status}",
            'course' => $course
        ]);
    }

    public function banUser($id)
    {
        $user = User::findOrFail($id);
        $user->update(['status' => 'banned']);
        return response()->json(['message' => 'User banned successfully']);
    }
}
