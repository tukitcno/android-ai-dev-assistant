"use client"

import { useState } from "react"
import { View, Text, ScrollView, Switch, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Moon, Sun, Zap, Cloud, Lock, CreditCard, HelpCircle, LogOut } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  const navigation = useNavigation()
  const [darkMode, setDarkMode] = useState(false)
  const [autoSave, setAutoSave] = useState(true)
  const [aiSuggestions, setAiSuggestions] = useState(true)
  const [cloudSync, setCloudSync] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    // In a real app, you would update the theme here
  }

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4">
        <Text className="text-xl font-bold text-foreground mb-4">Settings</Text>

        <View className="mb-6">
          <Text className="text-sm font-medium text-muted-foreground mb-2">Appearance</Text>
          <View className="bg-card rounded-lg overflow-hidden">
            <View className="flex flex-row items-center justify-between p-4">
              <View className="flex flex-row items-center">
                {darkMode ? (
                  <Moon className="h-5 w-5 mr-3 text-foreground" />
                ) : (
                  <Sun className="h-5 w-5 mr-3 text-amber-500" />
                )}
                <Text className="text-foreground">Dark Mode</Text>
              </View>
              <Switch
                value={darkMode}
                onValueChange={toggleDarkMode}
                trackColor={{ false: "hsl(var(--muted))", true: "hsl(var(--primary))" }}
              />
            </View>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-sm font-medium text-muted-foreground mb-2">Editor</Text>
          <View className="bg-card rounded-lg overflow-hidden">
            <View className="flex flex-row items-center justify-between p-4">
              <Text className="text-foreground">Auto Save</Text>
              <Switch
                value={autoSave}
                onValueChange={setAutoSave}
                trackColor={{ false: "hsl(var(--muted))", true: "hsl(var(--primary))" }}
              />
            </View>
            <Separator />
            <View className="flex flex-row items-center justify-between p-4">
              <View className="flex flex-row items-center">
                <Zap className="h-5 w-5 mr-3 text-amber-500" />
                <Text className="text-foreground">AI Suggestions</Text>
              </View>
              <Switch
                value={aiSuggestions}
                onValueChange={setAiSuggestions}
                trackColor={{ false: "hsl(var(--muted))", true: "hsl(var(--primary))" }}
              />
            </View>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-sm font-medium text-muted-foreground mb-2">Storage</Text>
          <View className="bg-card rounded-lg overflow-hidden">
            <View className="flex flex-row items-center justify-between p-4">
              <View className="flex flex-row items-center">
                <Cloud className="h-5 w-5 mr-3 text-foreground" />
                <Text className="text-foreground">Cloud Sync</Text>
              </View>
              <Switch
                value={cloudSync}
                onValueChange={setCloudSync}
                trackColor={{ false: "hsl(var(--muted))", true: "hsl(var(--primary))" }}
              />
            </View>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-sm font-medium text-muted-foreground mb-2">Account</Text>
          <View className="bg-card rounded-lg overflow-hidden">
            <TouchableOpacity
              className="flex flex-row items-center justify-between p-4"
              onPress={() => navigation.navigate("Subscription" as never)}
            >
              <View className="flex flex-row items-center">
                <CreditCard className="h-5 w-5 mr-3 text-foreground" />
                <Text className="text-foreground">Subscription</Text>
              </View>
              <Text className="text-xs text-muted-foreground">Free Plan</Text>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity className="flex flex-row items-center justify-between p-4">
              <View className="flex flex-row items-center">
                <Lock className="h-5 w-5 mr-3 text-foreground" />
                <Text className="text-foreground">Privacy & Security</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-sm font-medium text-muted-foreground mb-2">Support</Text>
          <View className="bg-card rounded-lg overflow-hidden">
            <TouchableOpacity className="flex flex-row items-center justify-between p-4">
              <View className="flex flex-row items-center">
                <HelpCircle className="h-5 w-5 mr-3 text-foreground" />
                <Text className="text-foreground">Help & Support</Text>
              </View>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity className="flex flex-row items-center justify-between p-4">
              <View className="flex flex-row items-center">
                <LogOut className="h-5 w-5 mr-3 text-destructive" />
                <Text className="text-destructive">Sign Out</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-6 items-center">
          <Text className="text-xs text-muted-foreground">DevAssist AI v1.0.0</Text>
          <Text className="text-xs text-muted-foreground mt-1">© 2023 All Rights Reserved</Text>
        </View>
      </View>
    </ScrollView>
  )
}

