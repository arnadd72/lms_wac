<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\ModuleController;
use App\Http\Controllers\Api\LessonController;
use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\NotificationController;
use App\Http\Controllers\Api\LeaderboardController;

// ─── Public ───
Route::get('categories', [CategoryController::class, 'index']);
Route::get('courses', [CourseController::class, 'index']);
Route::get('courses/{id}', [CourseController::class, 'show']);

// ─── Auth ───
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

// ─── Protected Routes ───
Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('me', [AuthController::class, 'me']);

    // Instructor
    Route::post('courses', [CourseController::class, 'store']);
    Route::put('courses/{id}', [CourseController::class, 'update']);
    Route::delete('courses/{id}', [CourseController::class, 'destroy']);
    Route::apiResource('modules', ModuleController::class)->except(['index', 'show']);
    Route::apiResource('lessons', LessonController::class)->except(['index', 'show']);

    // Student / Gamification
    Route::get('notifications', [NotificationController::class, 'index']);
    Route::get('leaderboard', [LeaderboardController::class, 'index']);
    
    // Admin
    Route::prefix('admin')->group(function () {
        Route::get('stats', [AdminController::class, 'dashboardStats']);
        
        // User Management
        Route::get('users', [AdminController::class, 'users']);
        Route::post('users', [AdminController::class, 'storeUser']);
        Route::put('users/{id}', [AdminController::class, 'updateUser']);
        Route::delete('users/{id}', [AdminController::class, 'deleteUser']);
        Route::post('users/{id}/reset-password', [AdminController::class, 'resetUserPassword']);

        // Course Management
        Route::get('courses', [AdminController::class, 'courses']);
        Route::put('courses/{id}/status', [AdminController::class, 'updateCourseStatus']);

        // Category Management
        Route::apiResource('categories', CategoryController::class)->except(['index']);

        // Settings
        Route::get('settings', [AdminController::class, 'getSettings']);
        Route::post('settings', [AdminController::class, 'updateSettings']);
        Route::post('clear-cache', [AdminController::class, 'clearCache']);
    });
});
