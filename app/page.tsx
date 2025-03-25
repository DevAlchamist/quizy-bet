import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8" />
            <span className="text-2xl font-bold">QuizMaster</span>
          </div>
          <div className="space-x-4">
            <Link href="/auth/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Test Your Knowledge,<br />
              Win Real Rewards
            </h1>
            <p className="text-lg text-muted-foreground">
              Join thousands of quiz enthusiasts in competitive knowledge battles.
              Enter contests, showcase your expertise, and win exciting prizes!
            </p>
            <div className="space-x-4">
              <Link href="/auth/signup">
                <Button size="lg" className="animate-pulse">
                  Get Started
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <div className="relative bg-card p-8 rounded-3xl shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">Next Quiz Starting</h3>
                    <p className="text-muted-foreground">General Knowledge</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">$500</p>
                    <p className="text-sm text-muted-foreground">Prize Pool</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Entry Fee</p>
                    <p className="text-lg font-semibold">$5</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Players</p>
                    <p className="text-lg font-semibold">127/200</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="text-lg font-semibold">15 mins</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Questions</p>
                    <p className="text-lg font-semibold">25</p>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Join Quiz
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-xl">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Daily Competitions</h3>
            <p className="text-muted-foreground">
              New quizzes every day across various categories. Never miss a chance to win!
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Rewards</h3>
            <p className="text-muted-foreground">
              Winners receive their prizes immediately after quiz completion.
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fair Play</h3>
            <p className="text-muted-foreground">
              Advanced anti-cheating system ensures a level playing field for all participants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}