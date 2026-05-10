<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\User;
use Illuminate\Support\Facades\Hash;

$email = 'admin@wac.com';
$password = 'password';

$user = User::where('email', $email)->first();
if ($user) {
    echo "User found: " . $user->email . "\n";
    if (Hash::check($password, $user->password)) {
        echo "Password matches!\n";
    } else {
        echo "Password DOES NOT match!\n";
    }
} else {
    echo "User NOT found!\n";
}
