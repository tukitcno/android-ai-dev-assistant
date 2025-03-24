"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bio: z.string().max(160).optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function SettingsForm() {
  const [activeTab, setActiveTab] = useState("account")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [autoSave, setAutoSave] = useState(true)
  const [aiSuggestions, setAiSuggestions] = useState(true)

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: "johndoe",
      email: "john.doe@example.com",
      bio: "Software developer with a passion for AI and web technologies.",
    },
    mode: "onChange",
  })

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    })
  }

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="appearance">Appearance</TabsTrigger>
        <TabsTrigger value="editor">Editor</TabsTrigger>
      </TabsList>

      <TabsContent value="account" className="space-y-6">
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h3 className="font-medium">Profile Picture</h3>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline">
                Upload
              </Button>
              <Button size="sm" variant="outline">
                Remove
              </Button>
            </div>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe" {...field} />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormDescription>We'll never share your email with anyone else.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us a little bit about yourself" className="resize-none" {...field} />
                  </FormControl>
                  <FormDescription>
                    You can <span>@mention</span> other users and organizations.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Update profile</Button>
          </form>
        </Form>
      </TabsContent>

      <TabsContent value="appearance" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Theme</CardTitle>
            <CardDescription>Customize the appearance of the application.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="font-medium">Dark Mode</h3>
                <p className="text-sm text-muted-foreground">Switch between light and dark themes.</p>
              </div>
              <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Font Size</CardTitle>
            <CardDescription>Adjust the font size for better readability.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="grid grid-cols-5 gap-2">
                <Button variant="outline" size="sm">
                  XS
                </Button>
                <Button variant="outline" size="sm">
                  S
                </Button>
                <Button variant="default" size="sm">
                  M
                </Button>
                <Button variant="outline" size="sm">
                  L
                </Button>
                <Button variant="outline" size="sm">
                  XL
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">Current font size: Medium</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="editor" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Editor Preferences</CardTitle>
            <CardDescription>Customize your coding environment.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="font-medium">Auto Save</h3>
                <p className="text-sm text-muted-foreground">Automatically save changes as you type.</p>
              </div>
              <Switch checked={autoSave} onCheckedChange={setAutoSave} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="font-medium">AI Suggestions</h3>
                <p className="text-sm text-muted-foreground">Show AI-powered code suggestions as you type.</p>
              </div>
              <Switch checked={aiSuggestions} onCheckedChange={setAiSuggestions} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Language Preferences</CardTitle>
            <CardDescription>Set your preferred programming languages.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="default" size="sm">
                JavaScript
              </Button>
              <Button variant="outline" size="sm">
                TypeScript
              </Button>
              <Button variant="outline" size="sm">
                Python
              </Button>
              <Button variant="outline" size="sm">
                HTML/CSS
              </Button>
              <Button variant="outline" size="sm">
                React
              </Button>
              <Button variant="outline" size="sm">
                Node.js
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              These settings affect code suggestions and syntax highlighting.
            </p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

