<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Certificate;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CertificateController extends Controller
{
    /**
     * List certificates for the authenticated user.
     */
    public function index(Request $request)
    {
        $certs = Certificate::with(['course', 'course.instructor'])
            ->where('user_id', auth()->id() ?? 1)
            ->whereNull('revoked_at')
            ->orderByDesc('issued_at')
            ->get();

        return response()->json($certs);
    }

    /**
     * Public: Verify certificate by code (no auth needed).
     */
    public function verify(string $code)
    {
        $cert = Certificate::with(['user', 'course', 'course.instructor'])
            ->where('verification_code', $code)
            ->first();

        if (!$cert) {
            return response()->json(['valid' => false, 'message' => 'Sertifikat tidak ditemukan.'], 404);
        }

        if ($cert->revoked_at) {
            return response()->json([
                'valid' => false,
                'message' => 'Sertifikat ini telah dicabut.',
                'revoke_reason' => $cert->revoke_reason,
            ]);
        }

        return response()->json([
            'valid' => true,
            'student_name' => $cert->user->name,
            'course_title' => $cert->course->title,
            'instructor_name' => $cert->course->instructor->name,
            'issued_at' => $cert->issued_at->format('d F Y'),
            'verification_code' => $cert->verification_code,
        ]);
    }
}
