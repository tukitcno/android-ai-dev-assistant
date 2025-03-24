import { View } from "react-native"

interface SeparatorProps {
  orientation?: "horizontal" | "vertical"
  className?: string
}

export function Separator({ orientation = "horizontal", className = "" }: SeparatorProps) {
  return <View className={`${orientation === "horizontal" ? "h-px w-full" : "w-px h-full"} bg-border ${className}`} />
}

