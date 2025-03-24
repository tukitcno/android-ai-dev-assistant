import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import { Code, FolderOpen, Settings, Home } from "lucide-react"

import HomePage from "./pages/home"
import EditorPage from "./pages/editor"
import ProjectsPage from "./pages/projects"
import SettingsPage from "./pages/settings"
import SubscriptionPage from "./pages/subscription"

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "hsl(var(--background))" },
        tabBarActiveTintColor: "hsl(var(--primary))",
        tabBarInactiveTintColor: "hsl(var(--muted-foreground))",
        headerStyle: { backgroundColor: "hsl(var(--background))" },
        headerTintColor: "hsl(var(--foreground))",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => <Home size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Editor"
        component={EditorPage}
        options={{
          tabBarIcon: ({ color }) => <Code size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Projects"
        component={ProjectsPage}
        options={{
          tabBarIcon: ({ color }) => <FolderOpen size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsPage}
        options={{
          tabBarIcon: ({ color }) => <Settings size={20} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen
          name="Subscription"
          component={SubscriptionPage}
          options={{
            headerShown: true,
            title: "Subscription Plans",
            headerStyle: { backgroundColor: "hsl(var(--background))" },
            headerTintColor: "hsl(var(--foreground))",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

