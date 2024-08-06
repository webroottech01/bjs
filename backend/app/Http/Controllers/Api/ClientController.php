<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
    public function getClientsData(){
        $all_clients = Client::all();
        $clientArr  = [];
        foreach($all_clients as $client){
            $clientArr[] = array(
                'id' => $client->id,
                'name' => $client->name,
                'link' => $client->link,
                'logo' => url('/').'/storage/'.$client->logo,
            );
        }
        return response()->json([
            'message' => 'all clients !!',
            'data' => $clientArr,
        ], 200);
    }
}
