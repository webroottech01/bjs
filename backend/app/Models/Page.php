<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'page_description',
        'meta_title',
        'meta_description',
        'meta_icon',
    ];

    protected $casts = [
        'page_description' => 'array',
    ];

    public function getPageDescriptionAttribute($value)
    {
        return json_decode($value, true);
    }

    public function setPageDescriptionAttribute($value)
    {
        $this->attributes['page_description'] = json_encode($value);
    }
}
