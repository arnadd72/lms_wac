<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Submission extends Model {
    public $timestamps = false;
    protected $fillable = ['assignment_id','user_id','note','score','rubric_scores','feedback','graded_by','graded_at','is_late','status','submitted_at'];
    protected $casts = ['rubric_scores' => 'array', 'graded_at' => 'datetime', 'submitted_at' => 'datetime', 'is_late' => 'boolean'];
    public function files() { return $this->hasMany(SubmissionFile::class); }
    public function grader() { return $this->belongsTo(User::class, 'graded_by'); }
}
