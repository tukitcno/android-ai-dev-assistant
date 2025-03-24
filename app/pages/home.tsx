import { View, Text, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ArrowRight, Code, GitBranch, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const navigation = useNavigation()

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <View className="mb-6">
        <Text className="text-2xl font-bold text-foreground mb-2">Welcome to DevAssist AI</Text>
        <Text className="text-muted-foreground">Your AI-powered development assistant</Text>
      </View>

      <View className="mb-6">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-lg flex flex-row items-center">
              <Zap className="h-5 w-5 mr-2 text-amber-500" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              className="flex flex-row items-center justify-center"
              onPress={() => navigation.navigate("Editor" as never)}
            >
              <Code className="h-4 w-4 mr-2" />
              <Text className="text-foreground">New File</Text>
            </Button>
            <Button
              variant="outline"
              className="flex flex-row items-center justify-center"
              onPress={() => navigation.navigate("Projects" as never)}
            >
              <GitBranch className="h-4 w-4 mr-2" />
              <Text className="text-foreground">Open Project</Text>
            </Button>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-lg flex flex-row items-center">
              <Star className="h-5 w-5 mr-2 text-amber-500" />
              Subscription
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Text className="text-foreground mb-2">You're on the Free plan</Text>
            <Text className="text-muted-foreground text-sm mb-4">
              Upgrade to access advanced AI features and more storage
            </Text>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onPress={() => navigation.navigate("Subscription" as never)}>
              <Text className="text-primary-foreground">View Plans</Text>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardFooter>
        </Card>
      </View>

      <View>
        <Text className="text-lg font-semibold text-foreground mb-3">Recent Projects</Text>
        <Card className="mb-3">
          <CardHeader className="py-3">
            <CardTitle className="text-base">Shopping App</CardTitle>
          </CardHeader>
          <CardFooter className="py-3">
            <Text className="text-xs text-muted-foreground">Last edited: 2 hours ago</Text>
          </CardFooter>
        </Card>
        <Card className="mb-3">
          <CardHeader className="py-3">
            <CardTitle className="text-base">Weather Widget</CardTitle>
          </CardHeader>
          <CardFooter className="py-3">
            <Text className="text-xs text-muted-foreground">Last edited: Yesterday</Text>
          </CardFooter>
        </Card>
      </View>
    </ScrollView>
  )
}

