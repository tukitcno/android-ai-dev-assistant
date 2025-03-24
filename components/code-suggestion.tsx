import { View, Text, TouchableOpacity } from "react-native"
import { Check, X } from "lucide-react"

interface CodeSuggestionProps {
  suggestion: string
  onAccept: () => void
  onDismiss: () => void
}

export default function CodeSuggestion({ suggestion, onAccept, onDismiss }: CodeSuggestionProps) {
  return (
    <View className="absolute bottom-4 left-4 right-4 bg-card border border-border rounded-md shadow-lg">
      <View className="flex flex-row items-center justify-between p-2 border-b border-border">
        <Text className="font-medium text-foreground">AI Suggestion</Text>
        <View className="flex flex-row">
          <TouchableOpacity onPress={onAccept} className="p-1 mr-1">
            <Check className="h-4 w-4 text-primary" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDismiss} className="p-1">
            <X className="h-4 w-4 text-muted-foreground" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="p-3 bg-muted">
        <Text className="font-mono text-xs text-foreground">{suggestion}</Text>
      </View>
    </View>
  )
}

