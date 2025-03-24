"use client"

import { useState } from "react"
import { View, Text, ScrollView } from "react-native"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface PlanFeature {
  name: string
  included: boolean
}

interface SubscriptionPlan {
  id: string
  name: string
  price: string
  description: string
  features: PlanFeature[]
  popular?: boolean
}

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans: SubscriptionPlan[] = [
    {
      id: "free",
      name: "Free",
      price: "$0",
      description: "Basic features for hobbyists",
      features: [
        { name: "Basic code completion", included: true },
        { name: "3 projects", included: true },
        { name: "50MB storage", included: true },
        { name: "Community support", included: true },
        { name: "Advanced AI features", included: false },
        { name: "Unlimited projects", included: false },
        { name: "Git integration", included: false },
        { name: "Collaboration", included: false },
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: "$9.99/mo",
      description: "Advanced features for professionals",
      popular: true,
      features: [
        { name: "Advanced code completion", included: true },
        { name: "20 projects", included: true },
        { name: "2GB storage", included: true },
        { name: "Priority support", included: true },
        { name: "Advanced AI features", included: true },
        { name: "Git integration", included: true },
        { name: "Basic collaboration", included: true },
        { name: "Unlimited projects", included: false },
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$19.99/mo",
      description: "Everything for teams and businesses",
      features: [
        { name: "Premium code completion", included: true },
        { name: "Unlimited projects", included: true },
        { name: "10GB storage", included: true },
        { name: "24/7 support", included: true },
        { name: "Advanced AI features", included: true },
        { name: "Git integration", included: true },
        { name: "Advanced collaboration", included: true },
        { name: "Custom branding", included: true },
      ],
    },
  ]

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-xl font-bold text-foreground mb-6 text-center">Choose Your Plan</Text>

      {plans.map((plan) => (
        <Card key={plan.id} className={`mb-4 ${plan.popular ? "border-primary" : "border-border"}`}>
          {plan.popular && (
            <View className="absolute top-0 right-0 bg-primary px-2 py-1 rounded-bl-md rounded-tr-md">
              <Text className="text-xs font-medium text-primary-foreground">Popular</Text>
            </View>
          )}

          <CardHeader>
            <CardTitle className="text-lg">{plan.name}</CardTitle>
            <View className="flex flex-row items-baseline">
              <Text className="text-2xl font-bold text-foreground">{plan.price}</Text>
              {plan.id !== "free" && <Text className="text-muted-foreground ml-1">per month</Text>}
            </View>
            <Text className="text-sm text-muted-foreground">{plan.description}</Text>
          </CardHeader>

          <CardContent>
            <View className="space-y-2">
              {plan.features.map((feature, index) => (
                <View key={index} className="flex flex-row items-center">
                  <View
                    className={`h-5 w-5 rounded-full flex items-center justify-center mr-2 ${feature.included ? "bg-primary" : "bg-muted"}`}
                  >
                    {feature.included && <Check className="h-3 w-3 text-primary-foreground" />}
                  </View>
                  <Text className={feature.included ? "text-foreground" : "text-muted-foreground"}>{feature.name}</Text>
                </View>
              ))}
            </View>
          </CardContent>

          <CardFooter>
            <Button
              className="w-full"
              variant={plan.id === "free" ? "outline" : "default"}
              onPress={() => setSelectedPlan(plan.id)}
            >
              <Text className={plan.id === "free" ? "text-foreground" : "text-primary-foreground"}>
                {plan.id === "free" ? "Current Plan" : "Subscribe"}
              </Text>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </ScrollView>
  )
}

