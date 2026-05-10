<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;

    protected $fillable = [
        'module_id',
        'title',
        'type',
        'content',
        'video_url',
        'video_duration',
        'is_preview',
        'is_required',
        'sort_order',
    ];

    protected $casts = [
        'is_preview' => 'boolean',
        'is_required' => 'boolean',
    ];

    public function module()
    {
        return $this->belongsTo(Module::class);
    }

    public function attachments()
    {
        return $this->hasMany(LessonAttachment::class);
    }
}
