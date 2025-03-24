import { SafeAreaProvider } from "react-native-safe-area-context"
import { ThemeProvider } from "@/components/theme-provider"
import AppNavigation from "./navigation"
import "./globals.css"

export default function Root() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppNavigation />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

