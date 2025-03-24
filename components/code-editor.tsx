"use client"

import { useState } from "react"
import { View, Text, TextInput, ScrollView } from "react-native"
import { Play, Save, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import CodeSuggestion from "@/components/code-suggestion"

export default function CodeEditor() {
  const [code, setCode] = useState(`// Example code
function calculateSum(a, b) {
  return a + b;
}

// Try typing here to see suggestions
`)
  const [showSuggestion, setShowSuggestion] = useState(false)

  const handleCodeChange = (text: string) => {
    setCode(text)

    // Simulate AI suggestion trigger
    if (text.includes("function") && text.length > 100) {
      setShowSuggestion(true)
    } else {
      setShowSuggestion(false)
    }
  }

  return (
    <View className="flex flex-1 flex-col">
      <View className="flex flex-row items-center justify-between p-2 bg-muted">
        <Text className="font-medium text-foreground">main.js</Text>
        <View className="flex flex-row">
          <Button variant="ghost" size="icon" className="mr-2">
            <Save className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="mr-2">
            <Code2 className="h-4 w-4" />
          </Button>
          <Button size="sm" className="bg-primary">
            <Play className="h-4 w-4 mr-1" />
            <Text className="text-primary-foreground text-xs">Run</Text>
          </Button>
        </View>
      </View>

      <View className="flex-1 relative">
        <ScrollView className="flex-1 bg-background">
          <TextInput
            multiline
            value={code}
            onChangeText={handleCodeChange}
            className="p-4 font-mono text-sm text-foreground"
            style={{ minHeight: 300 }}
          />
        </ScrollView>

        {showSuggestion && (
          <CodeSuggestion
            suggestion="Try adding error handling:\n\nfunction calculateSum(a, b) {\n  if (typeof a !== 'number' || typeof b !== 'number') {\n    throw new Error('Both arguments must be numbers');\n  }\n  return a + b;\n}"
            onAccept={() => {
              setCode(
                code.replace(
                  "function calculateSum(a, b) {\n  return a + b;\n}",
                  "function calculateSum(a, b) {\n  if (typeof a !== 'number' || typeof b !== 'number') {\n    throw new Error('Both arguments must be numbers');\n  }\n  return a + b;\n}",
                ),
              )
              setShowSuggestion(false)
            }}
            onDismiss={() => setShowSuggestion(false)}
          />
        )}
      </View>
    </View>
  )
}

