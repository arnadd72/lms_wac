<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Module;
use Illuminate\Http\Request;

class ModuleController extends Controller
{
    /**
     * Store a newly created module in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'course_id' => 'required|exists:courses,id',
            'title' => 'required|string|max:200',
            'description' => 'nullable|string',
            'sort_order' => 'nullable|integer',
        ]);

        if (!isset($validated['sort_order'])) {
            $maxOrder = Module::where('course_id', $validated['course_id'])->max('sort_order');
            $validated['sort_order'] = $maxOrder !== null ? $maxOrder + 1 : 0;
        }

        $module = Module::create($validated);
        return response()->json($module, 201);
    }

    /**
     * Update the specified module in storage.
     */
    public function update(Request $request, string $id)
    {
        $module = Module::findOrFail($id);
        $validated = $request->validate([
            'title' => 'sometimes|string|max:200',
            'description' => 'nullable|string',
            'sort_order' => 'sometimes|integer',
        ]);

        $module->update($validated);
        return response()->json($module);
    }

    /**
     * Remove the specified module from storage.
     */
    public function destroy(string $id)
    {
        $module = Module::findOrFail($id);
        $module->delete();
        return response()->json(['message' => 'Module deleted successfully']);
    }
}
