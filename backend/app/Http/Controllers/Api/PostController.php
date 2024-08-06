<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index(){
        $all_post = Post::all();
        $postArr = [];
        foreach($all_post as $post){
            $postArr[] = array(
                'id' => $post->id,
                'title' => $post->title ?? '',
                'description' => $post->description ?? '',
                'image' => url('/').'/storage/'.$post->image ?? '',
                'meta_title' => $post->meta_title ?? '',
                'meta_description' => $post->meta_description ?? '',
                'meta_keyword' => $post->meta_keyword ?? '',
                'created_at' => $post->created_at,
            );
        }
        return response()->json([
            'message' => 'all posts !!',
            'data' => $postArr,
        ], 200);
    }
}
