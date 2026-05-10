<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LessonAttachment extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'lesson_id',
        'filename',
        'file_url',
        'file_type',
        'file_size',
    ];

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }
}
