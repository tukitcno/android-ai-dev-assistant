"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, CreditCard } from "lucide-react"

export function BillingForm() {
  return (
    <Tabs defaultValue="subscription" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="subscription">Subscription</TabsTrigger>
        <TabsTrigger value="usage">Usage</TabsTrigger>
        <TabsTrigger value="history">Billing History</TabsTrigger>
      </TabsList>

      <TabsContent value="subscription" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
            <CardDescription>You are currently on the Free plan.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Free Plan Includes:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-primary" />
                  <span>Basic code completion</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-primary" />
                  <span>3 projects</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-primary" />
                  <span>50MB storage</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-primary" />
                  <span>Community support</span>
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/pricing">Upgrade Plan</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Add a payment method to upgrade your plan.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <CreditCard className="h-6 w-6" />
                <div>
                  <p className="text-sm font-medium">No payment method added</p>
                  <p className="text-xs text-muted-foreground">Add a payment method to upgrade your plan</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Add Method
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="usage" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Storage Usage</CardTitle>
            <CardDescription>You've used 12MB of your 50MB storage.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">12MB used</span>
                <span className="text-sm text-muted-foreground">50MB total</span>
              </div>
              <Progress value={24} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Usage</CardTitle>
            <CardDescription>You've used 3 of your 3 projects.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">3 used</span>
                <span className="text-sm text-muted-foreground">3 total</span>
              </div>
              <Progress value={100} />
            </div>
            <p className="text-sm text-muted-foreground">
              You've reached your project limit. Upgrade to create more projects.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/pricing">Upgrade Plan</Link>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="history" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
            <CardDescription>View your billing history and download invoices.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center py-6">
                <p className="text-muted-foreground">No billing history available.</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Your billing history will appear here once you upgrade to a paid plan.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

