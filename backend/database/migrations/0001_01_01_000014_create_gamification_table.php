<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // User Points
        Schema::create('user_points', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->integer('points');
            $table->string('reason', 200);
            $table->string('reference_type', 50)->nullable();
            $table->unsignedBigInteger('reference_id')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->index('user_id');
        });

        // Badges
        Schema::create('badges', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 100);
            $table->string('description', 300);
            $table->string('icon', 200);
            $table->json('criteria');
        });

        // User Badges
        Schema::create('user_badges', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->unsignedInteger('badge_id');
            $table->timestamp('earned_at')->useCurrent();
            $table->unique(['user_id', 'badge_id']);
            $table->foreign('badge_id')->references('id')->on('badges');
        });

        // Learning Streaks
        Schema::create('learning_streaks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade')->unique();
            $table->integer('current_streak')->default(0);
            $table->integer('longest_streak')->default(0);
            $table->date('last_activity')->nullable();
            $table->date('freeze_used_at')->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('learning_streaks');
        Schema::dropIfExists('user_badges');
        Schema::dropIfExists('badges');
        Schema::dropIfExists('user_points');
    }
};
