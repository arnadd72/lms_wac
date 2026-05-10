<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('instructor_id')->constrained('users')->onDelete('cascade');
            $table->unsignedInteger('category_id');
            $table->string('title', 200);
            $table->string('slug', 220)->unique();
            $table->string('short_description', 300);
            $table->longText('description');
            $table->string('thumbnail', 500)->nullable();
            $table->string('trailer_url', 500)->nullable();
            $table->enum('level', ['beginner', 'intermediate', 'advanced']);
            $table->string('language', 10)->default('id');
            $table->enum('status', ['draft', 'pending_review', 'published', 'archived'])->default('draft');
            $table->enum('visibility', ['public', 'unlisted', 'private'])->default('public');
            $table->integer('total_duration')->default(0);
            $table->integer('total_lessons')->default(0);
            $table->integer('enrolled_count')->default(0);
            $table->tinyInteger('completion_threshold')->default(100);
            $table->boolean('certificate_enabled')->default(true);
            $table->timestamp('published_at')->nullable();
            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
