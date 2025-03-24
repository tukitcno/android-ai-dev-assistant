"use client"

import { useState } from "react"
import { View, Text, TextInput, ScrollView } from "react-native"
import { Play, Save, Code2, Terminal, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import CodeSuggestion from "@/components/code-suggestion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EditorPage() {
  const [code, setCode] = useState(`// Example code
function calculateSum(a, b) {
  return a + b;
}

// Try typing here to see suggestions
`)
  const [showSuggestion, setShowSuggestion] = useState(false)
  const [consoleOutput, setConsoleOutput] = useState("")
  const [activeTab, setActiveTab] = useState("editor")

  const handleCodeChange = (text: string) => {
    setCode(text)

    // Simulate AI suggestion trigger
    if (text.includes("function") && text.length > 100) {
      setShowSuggestion(true)
    } else {
      setShowSuggestion(false)
    }
  }

  const runCode = () => {
    try {
      // This is a simplified simulation of code execution
      // In a real app, you would use a JavaScript engine or native code execution
      setConsoleOutput("> Running code...\n")

      // Simple evaluation for demo purposes
      const result = eval(`
        (function() {
          const logs = [];
          const originalConsoleLog = console.log;
          console.log = (...args) => {
            logs.push(args.join(' '));
            originalConsoleLog(...args);
          };
          
          try {
            ${code}
            
            // Test the function if it exists
            if (typeof calculateSum === 'function') {
              console.log('Testing calculateSum(5, 3):', calculateSum(5, 3));
            }
            
            return logs.join('\\n');
          } catch (error) {
            return 'Error: ' + error.message;
          } finally {
            console.log = originalConsoleLog;
          }
        })()
      `)

      setConsoleOutput((prev) => prev + result)
      setActiveTab("console")
    } catch (error) {
      setConsoleOutput(`> Error: ${error.message}`)
      setActiveTab("console")
    }
  }

  return (
    <View className="flex flex-1 flex-col">
      <View className="flex flex-row items-center justify-between p-2 bg-card border-b border-border">
        <Text className="font-medium text-foreground">main.js</Text>
        <View className="flex flex-row">
          <Button variant="ghost" size="icon" className="mr-2">
            <Save className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="mr-2">
            <Code2 className="h-4 w-4" />
          </Button>
          <Button size="sm" className="bg-primary" onPress={runCode}>
            <Play className="h-4 w-4 mr-1" />
            <Text className="text-primary-foreground text-xs">Run</Text>
          </Button>
        </View>
      </View>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="editor">
            <Code2 className="h-4 w-4 mr-1" />
            <Text>Editor</Text>
          </TabsTrigger>
          <TabsTrigger value="console">
            <Terminal className="h-4 w-4 mr-1" />
            <Text>Console</Text>
          </TabsTrigger>
          <TabsTrigger value="ai">
            <MessageSquare className="h-4 w-4 mr-1" />
            <Text>AI Help</Text>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="editor" className="flex-1 relative">
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
        </TabsContent>

        <TabsContent value="console" className="flex-1">
          <ScrollView className="flex-1 bg-black p-4">
            <Text className="font-mono text-sm text-green-400">
              {consoleOutput || "> Console output will appear here after running code"}
            </Text>
          </ScrollView>
        </TabsContent>

        <TabsContent value="ai" className="flex-1">
          <ScrollView className="flex-1 bg-background p-4">
            <Text className="text-foreground font-medium mb-2">AI Suggestions</Text>
            <Text className="text-muted-foreground mb-4">Here are some improvements for your code:</Text>

            <View className="bg-muted p-3 rounded-md mb-3">
              <Text className="text-foreground font-medium mb-1">Add Input Validation</Text>
              <Text className="text-muted-foreground text-sm">
                Your function should validate input types to prevent unexpected behavior.
              </Text>
              <Button size="sm" className="mt-2">
                <Text className="text-xs">Apply Suggestion</Text>
              </Button>
            </View>

            <View className="bg-muted p-3 rounded-md mb-3">
              <Text className="text-foreground font-medium mb-1">Add Documentation</Text>
              <Text className="text-muted-foreground text-sm">
                Consider adding JSDoc comments to document your function parameters and return values.
              </Text>
              <Button size="sm" className="mt-2">
                <Text className="text-xs">Apply Suggestion</Text>
              </Button>
            </View>
          </ScrollView>
        </TabsContent>
      </Tabs>
    </View>
  )
}

