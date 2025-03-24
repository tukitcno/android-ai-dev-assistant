"use client"

import { useState } from "react"
import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native"
import { Send, Bot, User } from "lucide-react"

export default function AIAssistantPanel() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I'm your AI coding assistant. How can I help you today?" },
  ])

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages([...messages, { role: "user", content: input }])

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("generate") && input.toLowerCase().includes("code")) {
        response =
          'Here\'s a simple React component for a button:\n\n```jsx\nfunction CustomButton({ text, onClick }) {\n  return (\n    <button \n      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"\n      onClick={onClick}\n    >\n      {text}\n    </button>\n  );\n}\n```\n\nYou can use it like this: `<CustomButton text="Click me" onClick={() => alert(\'Clicked!\')} />`'
      } else if (input.toLowerCase().includes("error") || input.toLowerCase().includes("bug")) {
        response =
          "It looks like you might be encountering a common issue. Check if:\n\n1. All your imports are correct\n2. You're not using undefined variables\n3. Your component is properly exported\n\nIf you share the specific error message, I can help troubleshoot further."
      } else {
        response =
          "I'm here to help with your coding questions. You can ask me to:\n- Generate code snippets\n- Debug errors\n- Explain concepts\n- Suggest optimizations\n\nWhat would you like assistance with?"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
    }, 1000)

    setInput("")
  }

  return (
    <View className="flex flex-1 flex-col">
      <ScrollView className="flex-1 p-4">
        {messages.map((message, index) => (
          <View
            key={index}
            className={`mb-4 flex flex-row ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <View
              className={`rounded-lg p-3 max-w-[80%] ${
                message.role === "user" ? "bg-primary rounded-tr-none" : "bg-muted rounded-tl-none"
              }`}
            >
              <View className="flex flex-row items-center mb-1">
                {message.role === "assistant" ? (
                  <Bot className="h-4 w-4 mr-1 text-foreground" />
                ) : (
                  <User className="h-4 w-4 mr-1 text-primary-foreground" />
                )}
                <Text
                  className={`font-medium ${message.role === "user" ? "text-primary-foreground" : "text-foreground"}`}
                >
                  {message.role === "assistant" ? "AI Assistant" : "You"}
                </Text>
              </View>
              <Text className={message.role === "user" ? "text-primary-foreground" : "text-foreground"}>
                {message.content}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View className="p-4 border-t border-border flex flex-row items-center">
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Ask the AI assistant..."
          className="flex-1 p-2 bg-muted rounded-l-md text-foreground"
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity onPress={handleSend} className="bg-primary p-2 rounded-r-md">
          <Send className="h-5 w-5 text-primary-foreground" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

