"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Clock, Trophy, Wallet } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
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
              <Link href="/dashboard" className="text-foreground font-medium">
                Dashboard
              </Link>
              <Link href="/quizzes" className="text-muted-foreground hover:text-foreground">
                Quizzes
              </Link>
              <Link href="/leaderboard" className="text-muted-foreground hover:text-foreground">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="flex items-center gap-4 pt-6">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Winnings</p>
                <p className="text-2xl font-bold">$1,250</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 pt-6">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Quizzes Played</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 pt-6">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Balance</p>
                <p className="text-2xl font-bold">$85</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Upcoming Quizzes</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((quiz) => (
                <Card key={quiz} className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
                  <CardContent className="relative p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">Science Quiz #{quiz}</h3>
                        <p className="text-muted-foreground">General Knowledge</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">$200</p>
                        <p className="text-sm text-muted-foreground">Prize Pool</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm text-muted-foreground">Entry Fee</p>
                        <p className="font-semibold">$2</p>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm text-muted-foreground">Players</p>
                        <p className="font-semibold">45/100</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Starts in 2h 15m</span>
                      </div>
                      <Button>Join Quiz</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Leaderboard</h2>
            <Card>
              <CardHeader>
                <CardTitle>Top Players This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Alex Thompson", score: 2850, position: 1 },
                    { name: "Sarah Chen", score: 2720, position: 2 },
                    { name: "Mike Johnson", score: 2680, position: 3 },
                    { name: "Emma Davis", score: 2590, position: 4 },
                    { name: "Chris Wilson", score: 2510, position: 5 },
                  ].map((player) => (
                    <div
                      key={player.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-bold">{player.position}</span>
                        <span>{player.name}</span>
                      </div>
                      <div className="font-semibold">{player.score}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}