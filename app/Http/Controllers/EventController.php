<?php

namespace App\Http\Controllers;

use App\Event;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class EventController extends Controller
{

    public function index(Request $request)
    {
        return $request->user()->events()->get();
    }

    public function edit(Request $request, $id)
    {
        return $request->user()->events()->find($id)->first();
    }

    public function patch(Request $request, Event $event)
    {
        $this->authorize('update', $event);

        $validator = Validator::make($request->all(), [
            'title' => 'required|min:5|max:255',
            'description' => 'required|min:5',
        ]);

        if ($validator->fails()) {
            return response(json_encode([
                'error' => $validator->errors()->all()
            ]), 400);
        }

        $status = $event->update($request->all());

        return new JsonResponse(['data' => 'ok', 'status' => $status]);
    }

    public function delete(User $user, Event $event)
    {
        $this->authorize('delete', $event);

        $status = $event->delete();

        return new JsonResponse(['data' => 'ok', 'status' => $status]);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:5|max:255',
            'description' => 'required|min:5',
        ]);

        if ($validator->fails()) {
            return response(json_encode([
                'error' => $validator->errors()->all()
            ]), 400);
        }

        $status = $request->user()->events()->create($request->all());


        return new JsonResponse(['data' => 'ok', 'status' => $status]);
    }
}
