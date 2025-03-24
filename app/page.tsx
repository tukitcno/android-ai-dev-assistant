import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"

export const metadata: Metadata = {
  title: "DevAssist AI - AI-Powered Development Environment",
  description:
    "Boost your productivity with AI-powered code suggestions, real-time collaboration, and integrated development tools.",
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <main className="flex-1">
        <section className="container px-4 py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Supercharge Your Development
              </h2>
              <p className="text-muted-foreground md:text-xl">
                DevAssist AI combines the power of artificial intelligence with a robust development environment to help
                you code faster and smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/dashboard">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <div className="ml-2 text-sm font-medium">main.js</div>
              </div>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code className="text-foreground">
                  {`// AI-powered code suggestions
function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}

// DevAssist AI suggests:
function applyDiscount(total, discountCode) {
  const discounts = {
    "SAVE10": 0.1,
    "SAVE20": 0.2,
    "WELCOME": 0.15
  };
  
  const discountRate = discounts[discountCode] || 0;
  return total * (1 - discountRate);
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        <FeatureSection />

        <section className="container px-4 py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to transform your development workflow?
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Join thousands of developers who are coding faster and smarter with DevAssist AI.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/dashboard">
                  Start Coding Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

