import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Separator } from "@/components/ui/separator"
import { BillingForm } from "@/components/billing/billing-form"

export const metadata: Metadata = {
  title: "Billing - DevAssist AI",
  description: "Manage your subscription and billing information.",
}

export default function BillingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader heading="Billing" text="Manage your subscription and billing information." />
      <div className="container py-6">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Subscription Plan</h3>
              <p className="text-sm text-muted-foreground">View and update your current subscription.</p>
            </div>
            <Separator />
            <BillingForm />
          </div>
        </div>
      </div>
    </div>
  )
}

