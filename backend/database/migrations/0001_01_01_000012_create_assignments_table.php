<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Assignments
        Schema::create('assignments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('lesson_id')->constrained('lessons')->onDelete('cascade');
            $table->string('title', 200);
            $table->longText('description');
            $table->json('rubric')->nullable();
            $table->integer('max_score')->default(100);
            $table->integer('pass_score')->default(60);
            $table->timestamp('deadline')->nullable();
            $table->boolean('allow_late_submission')->default(false);
            $table->integer('max_submissions')->default(1);
            $table->timestamp('created_at')->useCurrent();
        });

        // Assignment Attachments (template unduhan)
        Schema::create('assignment_attachments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('assignment_id')->constrained('assignments')->onDelete('cascade');
            $table->string('filename', 255);
            $table->string('file_url', 500);
        });

        // Submissions
        Schema::create('submissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('assignment_id')->constrained('assignments');
            $table->foreignId('user_id')->constrained('users');
            $table->text('note')->nullable();
            $table->integer('score')->nullable();
            $table->json('rubric_scores')->nullable();
            $table->text('feedback')->nullable();
            $table->foreignId('graded_by')->nullable()->constrained('users');
            $table->timestamp('graded_at')->nullable();
            $table->boolean('is_late')->default(false);
            $table->enum('status', ['submitted', 'graded', 'returned'])->default('submitted');
            $table->timestamp('submitted_at')->useCurrent();
        });

        // Submission Files
        Schema::create('submission_files', function (Blueprint $table) {
            $table->id();
            $table->foreignId('submission_id')->constrained('submissions')->onDelete('cascade');
            $table->string('filename', 255);
            $table->string('file_url', 500);
            $table->integer('file_size');
            $table->string('file_type', 50);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('submission_files');
        Schema::dropIfExists('submissions');
        Schema::dropIfExists('assignment_attachments');
        Schema::dropIfExists('assignments');
    }
};
