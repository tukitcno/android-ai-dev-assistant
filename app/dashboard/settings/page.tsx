import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Separator } from "@/components/ui/separator"
import { SettingsForm } from "@/components/settings/settings-form"

export const metadata: Metadata = {
  title: "Settings - DevAssist AI",
  description: "Manage your account settings and preferences.",
}

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader heading="Settings" text="Manage your account settings and preferences." />
      <div className="container py-6">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Profile</h3>
              <p className="text-sm text-muted-foreground">
                Update your personal information and how others see you on the platform.
              </p>
            </div>
            <Separator />
            <SettingsForm />
          </div>
        </div>
      </div>
    </div>
  )
}

