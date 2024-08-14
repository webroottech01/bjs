<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ContactContoller;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\ClientController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/contact', [ContactContoller::class, 'contactUs'])->name('contact');
Route::get('getpost', [PostController::class, 'index']);
Route::get('post/{id}', [PostController::class, 'singlePost']);

Route::get('clients', [ClientController::class, 'getClientsData']);

//all pages api
Route::get('all-pages', [PostController::class, 'allPages']);
Route::get('page/{id}', [PostController::class, 'singlePage']);

Route::get('testimonial', [PostController::class, 'testimonial']);
