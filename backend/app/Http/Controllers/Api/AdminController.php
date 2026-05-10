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

    public function storeUser(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'role' => 'required|in:admin,instructor,student',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => \Hash::make($request->password),
            'role' => $request->role,
            'status' => 'active'
        ]);

        return response()->json(['message' => 'User created successfully', 'user' => $user], 201);
    }

    public function updateUser(Request $request, $id)
    {
        $user = User::findOrFail($id);
        
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,'.$id,
            'role' => 'required|in:admin,instructor,student',
            'status' => 'required|in:active,inactive,banned',
        ]);

        $user->update($request->only(['name', 'email', 'role', 'status']));

        return response()->json(['message' => 'User updated successfully', 'user' => $user]);
    }

    public function deleteUser($id)
    {
        $user = User::findOrFail($id);
        
        // Prevent deleting self
        if (auth()->id() == $id) {
            return response()->json(['message' => 'Cannot delete your own account'], 403);
        }

        $user->delete();
        return response()->json(['message' => 'User deleted successfully']);
    }

    public function resetUserPassword(Request $request, $id)
    {
        $request->validate(['password' => 'required|string|min:8']);
        $user = User::findOrFail($id);
        $user->update(['password' => \Hash::make($request->password)]);
        return response()->json(['message' => 'Password reset successfully']);
    }

    public function courses(Request $request)
    {
        $courses = Course::with(['instructor:id,name', 'category:id,name'])
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

        return response()->json([
            'message' => "Course status updated to {$request->status}",
            'course' => $course
        ]);
    }

    public function getSettings()
    {
        $settings = \App\Models\Setting::all();
        return response()->json($settings);
    }

    public function updateSettings(Request $request)
    {
        $request->validate([
            'settings' => 'required|array',
            'settings.*.key' => 'required|string',
            'settings.*.value' => 'nullable|string',
        ]);

        foreach ($request->settings as $s) {
            \App\Models\Setting::updateOrCreate(
                ['key' => $s['key']],
                ['value' => $s['value'], 'group' => $s['group'] ?? 'general']
            );
        }

        return response()->json(['message' => 'Settings updated successfully']);
    }

    public function clearCache()
    {
        \Artisan::call('cache:clear');
        \Artisan::call('view:clear');
        \Artisan::call('config:clear');
        \Artisan::call('route:clear');

        return response()->json(['message' => 'System cache cleared successfully']);
    }
}
