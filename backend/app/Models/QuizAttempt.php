<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class QuizAttempt extends Model {
    public $timestamps = false;
    protected $fillable = ['user_id','quiz_id','score','max_score','score_pct','passed','time_spent','started_at','submitted_at'];
    protected $casts = ['passed' => 'boolean', 'started_at' => 'datetime', 'submitted_at' => 'datetime'];
    public function answers() { return $this->hasMany(QuizAttemptAnswer::class, 'attempt_id'); }
}
