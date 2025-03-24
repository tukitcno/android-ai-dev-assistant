"use client"

import { useState } from "react"
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native"
import { File, GitBranch, Plus, Search, MoreVertical, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Project {
  id: string
  name: string
  description: string
  lastEdited: string
  files: number
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const projects: Project[] = [
    {
      id: "1",
      name: "Shopping App",
      description: "E-commerce mobile application",
      lastEdited: "2 hours ago",
      files: 24,
    },
    {
      id: "2",
      name: "Weather Widget",
      description: "Weather forecast widget",
      lastEdited: "Yesterday",
      files: 8,
    },
    {
      id: "3",
      name: "Task Manager",
      description: "Personal productivity app",
      lastEdited: "3 days ago",
      files: 15,
    },
    {
      id: "4",
      name: "Portfolio Website",
      description: "Personal portfolio site",
      lastEdited: "1 week ago",
      files: 12,
    },
  ]

  const filteredProjects = searchQuery
    ? projects.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : projects

  return (
    <View className="flex flex-1 flex-col">
      <View className="p-4 border-b border-border">
        <View className="flex flex-row items-center mb-4">
          <View className="flex-1 flex flex-row items-center bg-muted rounded-md px-3 py-2 mr-2">
            <Search className="h-4 w-4 text-muted-foreground mr-2" />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search projects..."
              className="flex-1 text-foreground bg-transparent"
              placeholderTextColor="hsl(var(--muted-foreground))"
            />
          </View>
          <Button size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </View>

        <View className="flex flex-row">
          <Button variant="outline" size="sm" className="mr-2">
            <Clock className="h-4 w-4 mr-1" />
            <Text className="text-xs">Recent</Text>
          </Button>
          <Button variant="outline" size="sm">
            <GitBranch className="h-4 w-4 mr-1" />
            <Text className="text-xs">Git Repos</Text>
          </Button>
        </View>
      </View>

      <ScrollView className="flex-1 p-4">
        {filteredProjects.length === 0 ? (
          <View className="flex items-center justify-center py-8">
            <Text className="text-muted-foreground">No projects found</Text>
          </View>
        ) : (
          filteredProjects.map((project) => (
            <Card key={project.id} className="mb-4">
              <CardHeader className="pb-2">
                <View className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <TouchableOpacity className="p-1">
                        <MoreVertical className="h-4 w-4 text-muted-foreground" />
                      </TouchableOpacity>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Open</DropdownMenuItem>
                      <DropdownMenuItem>Rename</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </View>
              </CardHeader>
              <CardContent className="py-2">
                <Text className="text-sm text-muted-foreground">{project.description}</Text>
              </CardContent>
              <CardFooter className="pt-2 flex flex-row justify-between">
                <Text className="text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 inline mr-1" />
                  {project.lastEdited}
                </Text>
                <Text className="text-xs text-muted-foreground">
                  <File className="h-3 w-3 inline mr-1" />
                  {project.files} files
                </Text>
              </CardFooter>
            </Card>
          ))
        )}
      </ScrollView>
    </View>
  )
}

