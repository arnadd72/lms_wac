<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\User;
use Illuminate\Support\Facades\Hash;

$users = [
    'admin@wac.com' => 'password',
    'instructor@wac.com' => 'password',
    'student@wac.com' => 'password',
];

foreach ($users as $email => $pass) {
    $user = User::where('email', $email)->first();
    if ($user) {
        $user->password = Hash::make($pass);
        $user->save();
        echo "Reset password for: $email\n";
    } else {
        echo "User not found: $email\n";
    }
}
