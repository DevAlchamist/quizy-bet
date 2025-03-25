"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Brain, Medal, Search, Trophy } from "lucide-react"
import Link from "next/link"

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6" />
              <span className="text-xl font-bold">QuizMaster</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                Dashboard
              </Link>
              <Link href="/quizzes" className="text-muted-foreground hover:text-foreground">
                Quizzes
              </Link>
              <Link href="/leaderboard" className="text-foreground font-medium">
                Leaderboard
              </Link>
              <Link href="/wallet" className="text-muted-foreground hover:text-foreground">
                Wallet
              </Link>
            </div>
            <Button variant="outline" size="sm">
              Profile
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Leaderboard</h1>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input className="pl-9" placeholder="Search players..." />
            </div>
            <Select defaultValue="week">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Top Players</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Alex Thompson", score: 2850, wins: 12, accuracy: "94%" },
                  { name: "Sarah Chen", score: 2720, wins: 10, accuracy: "92%" },
                  { name: "Mike Johnson", score: 2680, wins: 9, accuracy: "89%" },
                  { name: "Emma Davis", score: 2590, wins: 8, accuracy: "87%" },
                  { name: "Chris Wilson", score: 2510, wins: 7, accuracy: "85%" },
                ].map((player, index) => (
                  <div
                    key={player.name}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center justify-center h-8 w-8">
                      {index < 3 ? (
                        <Medal className={`h-6 w-6 ${
                          index === 0 ? "text-yellow-500" :
                          index === 1 ? "text-gray-400" :
                          "text-amber-600"
                        }`} />
                      ) : (
                        <span className="text-muted-foreground font-medium">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{player.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {player.wins} wins · {player.accuracy} accuracy
                      </div>
                    </div>
                    <div className="text-xl font-bold">{player.score}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Current Rank</p>
                  <p className="text-2xl font-bold">#28</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Total Score</p>
                  <p className="text-2xl font-bold">1,850</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Quizzes Won</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Accuracy</p>
                  <p className="text-2xl font-bold">82%</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">First Place</p>
                      <p className="text-sm text-muted-foreground">Science Quiz #12</p>
                    </div>
                  </div>
                  {/* Add more achievements */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}