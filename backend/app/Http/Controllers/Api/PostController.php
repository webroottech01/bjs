<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Page;
use App\Models\Testimonial;

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

    public function allPages(){
        $pages = Page::all();
        $pageArr = [];
        foreach($pages as $page){
            $pageArr[] = array(
                'id' => $page->id,
                'title' => $page->title,
            );
        }
        return response()->json([
            'message' => 'all posts !!',
            'data' => $pageArr,
        ], 200);
    }

    public function singlePage($id){
        $single_page = Page::find($id);
        $page_desc = $single_page->page_description;
        $page_description_arr =[];
        foreach($page_desc  as $k=>$pgedesc){
            $page_description_arr['section'.$k] = $pgedesc;
        }
        $page = array(
            'id' => $single_page->id,
            'title' => $single_page->title,
            'page_descriptions' => $page_description_arr,
            'meta_title' => $single_page->meta_title,
            'meta_description' => $single_page->meta_description,
            'meta_icon' => $single_page->meta_icon ?? '',
        );

        return response()->json([
            'message' => 'all posts !!',
            'data' => $page,
        ], 200);
    }

    public function testimonial(){
        $data = Testimonial::all();
        return response()->json([
            'message' => 'all testimonial !!',
            'data' => $data,
        ], 200);
    }
}
