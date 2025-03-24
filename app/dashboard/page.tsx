import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ProjectCard } from "@/components/dashboard/project-card"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { Plus, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Dashboard - DevAssist AI",
  description: "Manage your projects and access your development environment.",
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader heading="Dashboard" text="Manage your projects and development environment." />

      <main className="flex-1">
        <div className="container grid gap-6 md:gap-8 py-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Welcome back, John!</h2>
            <Button asChild>
              <Link href="/dashboard/editor/new">
                <Plus className="mr-2 h-4 w-4" /> New Project
              </Link>
            </Button>
          </div>

          <Tabs defaultValue="projects" className="space-y-4">
            <TabsList>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="projects" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="E-commerce App"
                  description="React-based shopping cart application"
                  lastEdited="2 hours ago"
                  language="TypeScript"
                  href="/dashboard/editor/project-1"
                />
                <ProjectCard
                  title="Weather Dashboard"
                  description="Weather forecast application with API integration"
                  lastEdited="Yesterday"
                  language="JavaScript"
                  href="/dashboard/editor/project-2"
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="Personal portfolio with responsive design"
                  lastEdited="3 days ago"
                  language="HTML/CSS"
                  href="/dashboard/editor/project-3"
                />
                <Card className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <Zap className="h-10 w-10 text-muted-foreground mb-4" />
                  <CardTitle className="text-lg">Create a New Project</CardTitle>
                  <CardDescription className="mt-2">
                    Start building something amazing with AI assistance.
                  </CardDescription>
                  <Button asChild className="mt-6" variant="outline">
                    <Link href="/dashboard/editor/new">
                      <Plus className="mr-2 h-4 w-4" /> New Project
                    </Link>
                  </Button>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="activity">
              <RecentActivity />
            </TabsContent>
          </Tabs>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Subscription</CardTitle>
                <CardDescription>You're currently on the Free plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">
                    <strong>3</strong> of <strong>3</strong> projects used
                  </p>
                  <p>
                    <strong>12MB</strong> of <strong>50MB</strong> storage used
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/pricing">Upgrade Plan</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Assistant</CardTitle>
                <CardDescription>Get help with your code</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ask questions, get code suggestions, and debug errors with our AI assistant.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/dashboard/assistant">
                    <Zap className="mr-2 h-4 w-4" /> Open Assistant
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>Learn how to use DevAssist AI</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Explore our guides, tutorials, and API documentation to get the most out of DevAssist AI.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/docs">View Docs</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

