<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class QuizQuestion extends Model {
    public $timestamps = false;
    protected $fillable = ['quiz_id','question_text','question_image','type','explanation','points','sort_order'];
    public function options() { return $this->hasMany(QuizOption::class)->orderBy('sort_order'); }
}
