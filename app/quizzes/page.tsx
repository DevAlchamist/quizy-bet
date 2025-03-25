"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Brain, Clock, Search } from "lucide-react"
import Link from "next/link"

export default function QuizzesPage() {
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
              <Link href="/quizzes" className="text-foreground font-medium">
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
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Available Quizzes</h1>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input className="pl-9" placeholder="Search quizzes..." />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="history">History</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="tech">Technology</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((quiz) => (
            <Card key={quiz} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
              <CardContent className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Technology Quiz #{quiz}</h3>
                    <p className="text-muted-foreground">Advanced Level</p>
                  </div>
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">Prize Pool</p>
                    <p className="font-semibold">$300</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">Entry Fee</p>
                    <p className="font-semibold">$5</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">Players</p>
                    <p className="font-semibold">67/150</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold">15 mins</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Starts in 1h 30m</span>
                  </div>
                  <Button>Join Quiz</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}