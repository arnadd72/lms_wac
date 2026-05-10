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
        Route::get('users', [AdminController::class, 'users']);
        Route::get('courses', [AdminController::class, 'courses']);
    });
});
