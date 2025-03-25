"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, Clock } from "lucide-react"
import { useState } from "react"

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [timeLeft, setTimeLeft] = useState(30)

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1
    },
    // Add more questions as needed
  ]

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index)
  }

  const handleNextQuestion = () => {
    setCurrentQuestion(prev => prev + 1)
    setSelectedAnswer(null)
    setTimeLeft(30)
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6" />
              <span className="text-xl font-bold">QuizMaster</span>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="font-semibold">{timeLeft}s</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Question {currentQuestion + 1} of {questions.length}</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Progress</span>
                <Progress value={(currentQuestion / questions.length) * 100} className="w-32" />
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{questions[currentQuestion].question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index ? "default" : "outline"}
                  className="w-full justify-start text-left h-auto p-4"
                  onClick={() => handleAnswerSelect(index)}
                >
                  <span className="mr-4">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Button>
              ))}
            </CardContent>
          </Card>

          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              Select an answer and click Next to continue
            </div>
            <Button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
            >
              Next Question
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}