<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Laravel CORS Options
    |--------------------------------------------------------------------------
    |
    | The paths that should be able to access the API, the allowed HTTP methods,
    | origins, headers, and other options for cross-origin resource sharing.
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie', 'contact-us'],

    'allowed_methods' => ['*'],

    'allowed_origins' => ['*'], // In production, specify your React app's URL

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];