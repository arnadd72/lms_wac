<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Certificate extends Model {
    public $timestamps = false;
    protected $fillable = ['user_id','course_id','enrollment_id','template_id','verification_code','certificate_url','issued_at','revoked_at','revoke_reason'];
    protected $casts = ['issued_at' => 'datetime', 'revoked_at' => 'datetime'];
    public function user() { return $this->belongsTo(User::class); }
    public function course() { return $this->belongsTo(Course::class); }
    public function enrollment() { return $this->belongsTo(Enrollment::class); }
    public function template() { return $this->belongsTo(CertificateTemplate::class); }
}
