<?php

use Illuminate\Support\Facades\Route;

// KITA TEST DI SINI JUGA
Route::get('/api-test', function() {
    return "Route Web Berhasil!";
});

Route::get('/', function () {
    return view('welcome');
});
