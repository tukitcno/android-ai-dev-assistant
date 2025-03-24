import { View, Text } from "react-native"
import { Menu, Settings, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <View className="flex flex-row items-center justify-between p-4 border-b border-border bg-card">
      <View className="flex flex-row items-center">
        <Button variant="ghost" size="icon" className="mr-2">
          <Menu className="h-5 w-5" />
        </Button>
        <Text className="font-bold text-lg text-foreground">DevAssist AI</Text>
      </View>

      <View className="flex flex-row items-center">
        <Button variant="ghost" size="icon" className="mr-2">
          <GitBranch className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </View>
    </View>
  )
}

