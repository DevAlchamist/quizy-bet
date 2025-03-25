"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, CreditCard, DollarSign, Plus, Trophy, Wallet } from "lucide-react"
import Link from "next/link"

export default function WalletPage() {
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
              <Link href="/leaderboard" className="text-muted-foreground hover:text-foreground">
                Leaderboard
              </Link>
              <Link href="/wallet" className="text-foreground font-medium">
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
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <Card className="flex-1">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Wallet className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Available Balance</p>
                      <p className="text-3xl font-bold">$85.00</p>
                    </div>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Money
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Total Winnings</p>
                    <p className="text-xl font-bold">$1,250.00</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Entry Fees Paid</p>
                    <p className="text-xl font-bold">$165.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5" />
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 12/24</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Remove</Button>
                  </div>
                  <Button className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Card
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: "win", amount: 100, quiz: "Science Quiz #5", date: "2024-03-15" },
                    { type: "entry", amount: -5, quiz: "History Quiz #8", date: "2024-03-14" },
                    { type: "deposit", amount: 50, method: "Credit Card", date: "2024-03-12" },
                    { type: "win", amount: 75, quiz: "Tech Quiz #3", date: "2024-03-10" },
                  ].map((transaction, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          transaction.type === "win" ? "bg-green-500/10" :
                          transaction.type === "entry" ? "bg-orange-500/10" :
                          "bg-blue-500/10"
                        }`}>
                          {transaction.type === "win" ? (
                            <Trophy className="h-5 w-5 text-green-500" />
                          ) : transaction.type === "entry" ? (
                            <Brain className="h-5 w-5 text-orange-500" />
                          ) : (
                            <DollarSign className="h-5 w-5 text-blue-500" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">
                            {transaction.type === "win" ? "Quiz Win" :
                             transaction.type === "entry" ? "Quiz Entry" :
                             "Deposit"}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {transaction.quiz || `via ${transaction.method}`}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${
                          transaction.amount > 0 ? "text-green-500" : ""
                        }`}>
                          {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount)}
                        </p>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
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