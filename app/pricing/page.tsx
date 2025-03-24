import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing - DevAssist AI",
  description: "Choose the right plan for your development needs.",
}

interface PricingPlan {
  name: string
  description: string
  price: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  popular?: boolean
}

export default function PricingPage() {
  const plans: PricingPlan[] = [
    {
      name: "Free",
      description: "Basic features for hobbyists and students",
      price: "$0",
      features: ["Basic code completion", "3 projects", "50MB storage", "Community support"],
      buttonText: "Get Started",
      buttonVariant: "outline",
    },
    {
      name: "Pro",
      description: "Advanced features for professional developers",
      price: "$9.99",
      features: [
        "Advanced code completion",
        "20 projects",
        "2GB storage",
        "Priority support",
        "Advanced AI features",
        "Git integration",
        "Basic collaboration",
      ],
      buttonText: "Subscribe",
      buttonVariant: "default",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Everything for teams and businesses",
      price: "$19.99",
      features: [
        "Premium code completion",
        "Unlimited projects",
        "10GB storage",
        "24/7 support",
        "Advanced AI features",
        "Git integration",
        "Advanced collaboration",
        "Custom branding",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
    },
  ]

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Choose the plan that's right for you and start coding smarter today.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-lg border bg-card p-6 shadow-sm ${plan.popular ? "border-primary" : ""}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-0 right-0 mx-auto w-32 rounded-full bg-primary px-3 py-1 text-center text-xs font-medium text-primary-foreground">
                Most Popular
              </div>
            )}
            <div className="mb-4 mt-4 text-center">
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.name !== "Free" && <span className="text-muted-foreground">/month</span>}
              </div>
            </div>
            <ul className="mb-6 mt-6 space-y-2 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Button asChild className="w-full" variant={plan.buttonVariant}>
                <Link href={plan.name === "Enterprise" ? "/contact" : "/signup"}>{plan.buttonText}</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-16 max-w-3xl text-center">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8 grid gap-6">
          <div className="text-left">
            <h3 className="font-bold">Can I switch plans later?</h3>
            <p className="mt-1 text-muted-foreground">
              Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing
              cycle.
            </p>
          </div>
          <div className="text-left">
            <h3 className="font-bold">Is there a trial period?</h3>
            <p className="mt-1 text-muted-foreground">
              We offer a 14-day free trial of the Pro plan for new users. No credit card required.
            </p>
          </div>
          <div className="text-left">
            <h3 className="font-bold">What payment methods do you accept?</h3>
            <p className="mt-1 text-muted-foreground">
              We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

