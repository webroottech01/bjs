<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use App\Mail\ContactUs;
use App\Models\Contact;
use Validator;

class ContactContoller extends Controller
{
    public function __construct(Request $request){
        $request->headers->set("Accept", "application/json");
    }

    public function sendResponse($result, $message, $statusCode = 201)
    {
    	$response = [
            'status' => true,
            'data'    => $result,
            'message' => $message,
        ];
        return response()->json($response, $statusCode);
    }

    public function sendError($error, $errorMessages = [], $code = 404)
    {
    	$response = [
            'status' => false,
            'data'    =>[],
            'message' => $error,
        ];

        if(!empty($errorMessages)){
            $response['data'] = $errorMessages;
        }
        return response()->json($response, $code);
    }

    public function contactUs(Request $request){

        // dd($request);
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|email',
            'contact_no' => ['required'], //, 'regex:/^(\+?[0-9\s\-\(\)]*)$/'
            'message' => 'required|string',
            'designation' => 'string',
            'company' => 'string',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $contact = new Contact();
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->contact_no = $request->contact_no;
        $contact->message = $request->message;
        $contact->designation = $request->designation;
        $contact->company = $request->company;
        $contact->save();

        Mail::to("help@bjs-beyond.com")->send(new ContactUs($request));

        return $this->sendResponse($contact, 'Form has been submitted'); 
    }
}
