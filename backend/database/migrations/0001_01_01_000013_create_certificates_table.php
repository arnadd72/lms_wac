<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Certificate Templates
        Schema::create('certificate_templates', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 100);
            $table->longText('html_template');
            $table->boolean('is_active')->default(false);
            $table->timestamp('created_at')->useCurrent();
        });

        // Certificates
        Schema::create('certificates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('course_id')->constrained('courses');
            $table->foreignId('enrollment_id')->constrained('enrollments');
            $table->unsignedInteger('template_id');
            $table->string('verification_code', 36)->unique();
            $table->string('certificate_url', 500);
            $table->timestamp('issued_at')->useCurrent();
            $table->timestamp('revoked_at')->nullable();
            $table->text('revoke_reason')->nullable();
            $table->unique(['user_id', 'course_id']);
            $table->foreign('template_id')->references('id')->on('certificate_templates');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('certificates');
        Schema::dropIfExists('certificate_templates');
    }
};
