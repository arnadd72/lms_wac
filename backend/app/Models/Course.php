<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'instructor_id',
        'category_id',
        'title',
        'slug',
        'short_description',
        'description',
        'thumbnail',
        'trailer_url',
        'level',
        'language',
        'status',
        'visibility',
        'total_duration',
        'total_lessons',
        'enrolled_count',
        'completion_threshold',
        'certificate_enabled',
        'published_at',
    ];

    protected $casts = [
        'certificate_enabled' => 'boolean',
        'published_at' => 'datetime',
    ];

    public function instructor()
    {
        return $this->belongsTo(User::class, 'instructor_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function outcomes()
    {
        return $this->hasMany(CourseOutcome::class)->orderBy('sort_order');
    }

    public function prerequisites()
    {
        return $this->hasMany(CoursePrerequisite::class)->orderBy('sort_order');
    }

    public function modules()
    {
        return $this->hasMany(Module::class)->orderBy('sort_order');
    }
}
