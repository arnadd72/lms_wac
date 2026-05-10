<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LeaderboardController extends Controller
{
    public function index(Request $request)
    {
        $period = $request->query('period', 'alltime'); // weekly, monthly, alltime

        $query = User::select('users.id', 'users.name', 'users.avatar', DB::raw('SUM(user_points.points) as total_points'))
            ->join('user_points', 'users.id', '=', 'user_points.user_id')
            ->groupBy('users.id', 'users.name', 'users.avatar')
            ->orderByDesc('total_points');

        if ($period === 'weekly') {
            $query->where('user_points.created_at', '>=', now()->startOfWeek());
        } elseif ($period === 'monthly') {
            $query->where('user_points.created_at', '>=', now()->startOfMonth());
        }

        $leaderboard = $query->limit(50)->get();

        // Get current user's rank
        $userRank = null;
        if ($request->user()) {
            // Simple rank calculation (could be optimized)
            $allPoints = User::join('user_points', 'users.id', '=', 'user_points.user_id')
                ->groupBy('users.id')
                ->select(DB::raw('SUM(user_points.points) as total_points'))
                ->orderByDesc('total_points')
                ->pluck('total_points')
                ->toArray();
            
            $userTotalPoints = $request->user()->points()->sum('points');
            $rank = array_search($userTotalPoints, $allPoints);
            $userRank = $rank !== false ? $rank + 1 : count($allPoints) + 1;
        }

        return response()->json([
            'leaderboard' => $leaderboard,
            'user_rank' => $userRank,
            'user_points' => $userTotalPoints ?? 0
        ]);
    }
}
