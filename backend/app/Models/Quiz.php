<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Quiz extends Model {
    public $timestamps = false;
    protected $fillable = ['lesson_id','title','instructions','pass_score','max_attempts','time_limit','shuffle_questions','shuffle_answers','show_result_immediately','allow_review'];
    protected $casts = ['shuffle_questions'=>'boolean','shuffle_answers'=>'boolean','show_result_immediately'=>'boolean','allow_review'=>'boolean'];
    public function questions() { return $this->hasMany(QuizQuestion::class)->orderBy('sort_order'); }
    public function attempts() { return $this->hasMany(QuizAttempt::class); }
}
