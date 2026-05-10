<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Assignment extends Model {
    public $timestamps = false;
    protected $fillable = ['lesson_id','title','description','rubric','max_score','pass_score','deadline','allow_late_submission','max_submissions'];
    protected $casts = ['rubric' => 'array', 'deadline' => 'datetime', 'allow_late_submission' => 'boolean'];
    public function attachments() { return $this->hasMany(AssignmentAttachment::class); }
    public function submissions() { return $this->hasMany(Submission::class); }
}
