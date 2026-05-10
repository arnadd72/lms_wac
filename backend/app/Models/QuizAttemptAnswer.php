<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class QuizAttemptAnswer extends Model {
    public $timestamps = false;
    protected $fillable = ['attempt_id','question_id','selected_options','text_answer','is_correct','points_earned'];
    protected $casts = ['selected_options' => 'array', 'is_correct' => 'boolean'];
}
