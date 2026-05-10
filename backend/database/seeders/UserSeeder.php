<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Admin
        User::create([
            'name' => 'Admin WAC',
            'email' => 'admin@wac.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
            'status' => 'active',
        ]);

        // Instructor
        User::create([
            'name' => 'Instruktur Sari',
            'email' => 'instructor@wac.com',
            'password' => Hash::make('password'),
            'role' => 'instructor',
            'status' => 'active',
        ]);

        // Student
        User::create([
            'name' => 'Rina Handayani',
            'email' => 'student@wac.com',
            'password' => Hash::make('password'),
            'role' => 'student',
            'status' => 'active',
        ]);
    }
}
