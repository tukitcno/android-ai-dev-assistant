"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Bot, Send, Sparkles, Lightbulb, AlertCircle } from "lucide-react"

interface AIAssistantProps {
  code: string
}

interface Message {
  role: "user" | "assistant"
  content: string
}

export function AIAssistant({ code }: AIAssistantProps) {
  const [activeTab, setActiveTab] = useState("chat")
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI coding assistant. How can I help you today?",
    },
  ])

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages([...messages, { role: "user", content: input }])

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("function") || input.toLowerCase().includes("code")) {
        response =
          "Based on your code, I suggest adding error handling to the calculateTotal function:\n\n```javascript\nfunction calculateTotal(items) {\n  if (!Array.isArray(items)) {\n    throw new Error('Items must be an array');\n  }\n  \n  return items.reduce((total, item) => {\n    if (!item.price || !item.quantity) {\n      console.warn('Item missing price or quantity', item);\n      return total;\n    }\n    return total + (item.price * item.quantity);\n  }, 0);\n}\n```\n\nThis will make your function more robust."
      } else if (input.toLowerCase().includes("error") || input.toLowerCase().includes("bug")) {
        response =
          "I don't see any obvious errors in your code. The calculateTotal function looks correct. If you're experiencing issues, make sure that:\n\n1. All items in the array have price and quantity properties\n2. The values are numbers, not strings\n3. There are no null or undefined values\n\nLet me know if you need more specific help!"
      } else {
        response =
          "I'm here to help with your code. I can:\n- Suggest improvements\n- Help debug issues\n- Explain concepts\n- Generate code examples\n\nWhat specific aspect of your code would you like assistance with?"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
    }, 1000)

    setInput("")
  }

  const suggestions = [
    {
      title: "Add Input Validation",
      description: "Validate that items is an array and each item has price and quantity.",
      code: `function calculateTotal(items) {
  if (!Array.isArray(items)) {
    throw new Error('Items must be an array');
  }
  
  return items.reduce((total, item) => {
    if (!item.price || !item.quantity) {
      console.warn('Item missing price or quantity', item);
      return total;
    }
    return total + (item.price * item.quantity);
  }, 0);
}`,
    },
    {
      title: "Add Documentation",
      description: "Add JSDoc comments to document the function.",
      code: `/**
 * Calculate the total price of items in a shopping cart
 * @param {Array} items - Array of items with price and quantity
 * @returns {number} - The total price
 */
function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}`,
    },
    {
      title: "Format Currency",
      description: "Add a helper function to format the total as currency.",
      code: `function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

const total = calculateTotal(cart);
console.log('Total:', formatCurrency(total));`,
    },
  ]

  return (
    <div className="h-full flex flex-col border-l">
      <div className="p-2 border-b">
        <h3 className="font-semibold px-2 py-1.5 flex items-center">
          <Bot className="h-4 w-4 mr-2" />
          AI Assistant
        </h3>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <div className="border-b">
          <TabsList className="w-full justify-start h-10 p-0">
            <TabsTrigger value="chat" className="rounded-none flex-1 data-[state=active]:bg-background">
              Chat
            </TabsTrigger>
            <TabsTrigger value="suggestions" className="rounded-none flex-1 data-[state=active]:bg-background">
              Suggestions
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="chat" className="flex-1 flex flex-col p-0 m-0 data-[state=active]:flex">
          <ScrollArea className="flex-1 p-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`rounded-lg p-3 max-w-[80%] ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                </div>
              </div>
            ))}
          </ScrollArea>

          <div className="p-4 border-t mt-auto">
            <div className="flex items-center">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask the AI assistant..."
                className="flex-1"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button size="icon" onClick={handleSend} className="ml-2">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="suggestions" className="flex-1 p-0 m-0 data-[state=active]:block">
          <ScrollArea className="h-full">
            <div className="p-4 space-y-4">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Sparkles className="h-4 w-4 mr-2" />
                <span>AI-powered suggestions for your code</span>
              </div>

              {suggestions.map((suggestion, index) => (
                <div key={index} className="border rounded-md p-4">
                  <div className="flex items-center mb-2">
                    <Lightbulb className="h-4 w-4 mr-2 text-yellow-500" />
                    <h4 className="font-medium">{suggestion.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{suggestion.description}</p>
                  <pre className="bg-muted p-3 rounded-md text-xs overflow-x-auto">
                    <code>{suggestion.code}</code>
                  </pre>
                  <Button size="sm" className="mt-3">
                    Apply Suggestion
                  </Button>
                </div>
              ))}

              <div className="border rounded-md p-4 bg-muted/30">
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-4 w-4 mr-2 text-blue-500" />
                  <h4 className="font-medium">Need more help?</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ask the AI assistant specific questions about your code to get personalized suggestions.
                </p>
              </div>
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  )
}

