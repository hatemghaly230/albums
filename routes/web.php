<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
Route::resource('albums', 'App\Http\Controllers\AlbumController', [
    'names' => [
        'index' => 'albums',
        'store' => 'albums.store',
        'edit' => 'albums.edit',
        'update' => 'albums.update'
    ]
]);
Route::resource('album_pictures', 'App\Http\Controllers\PictureController', [
    'names' => [
        'index' => 'album_pictures',
        'store' => 'album_pictures.store',
        'edit' => 'album_pictures.edit',
        'update' => 'album_pictures.update'
    ]
]);
Route::post('/delete_album', [App\Http\Controllers\AlbumController::class, 'delete_album'])->name('delete_album');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
