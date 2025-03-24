"use client"

import { useState } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Folder, File, ChevronRight, ChevronDown, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FileItem {
  id: string
  name: string
  type: "file" | "folder"
  children?: FileItem[]
  expanded?: boolean
}

export default function ProjectExplorer() {
  const [files, setFiles] = useState<FileItem[]>([
    {
      id: "1",
      name: "src",
      type: "folder",
      expanded: true,
      children: [
        {
          id: "2",
          name: "components",
          type: "folder",
          expanded: true,
          children: [
            { id: "3", name: "Button.js", type: "file" },
            { id: "4", name: "Card.js", type: "file" },
            { id: "5", name: "Input.js", type: "file" },
          ],
        },
        {
          id: "6",
          name: "screens",
          type: "folder",
          children: [
            { id: "7", name: "Home.js", type: "file" },
            { id: "8", name: "Profile.js", type: "file" },
          ],
        },
        { id: "9", name: "App.js", type: "file" },
        { id: "10", name: "index.js", type: "file" },
      ],
    },
    {
      id: "11",
      name: "package.json",
      type: "file",
    },
    {
      id: "12",
      name: "README.md",
      type: "file",
    },
  ])

  const toggleFolder = (id: string) => {
    const updateFiles = (items: FileItem[]): FileItem[] => {
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, expanded: !item.expanded }
        }
        if (item.children) {
          return { ...item, children: updateFiles(item.children) }
        }
        return item
      })
    }

    setFiles(updateFiles(files))
  }

  const renderFileTree = (items: FileItem[], level = 0) => {
    return items.map((item) => (
      <View key={item.id}>
        <TouchableOpacity
          onPress={() => item.type === "folder" && toggleFolder(item.id)}
          className={`flex flex-row items-center py-2 px-${level * 2 + 2}`}
        >
          {item.type === "folder" ? (
            <>
              {item.expanded ? (
                <ChevronDown className="h-4 w-4 mr-1 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-4 w-4 mr-1 text-muted-foreground" />
              )}
              <Folder className="h-4 w-4 mr-2 text-amber-500" />
            </>
          ) : (
            <File className="h-4 w-4 ml-5 mr-2 text-muted-foreground" />
          )}
          <Text className="text-foreground">{item.name}</Text>
        </TouchableOpacity>

        {item.type === "folder" && item.expanded && item.children && renderFileTree(item.children, level + 1)}
      </View>
    ))
  }

  return (
    <View className="flex flex-1 flex-col">
      <View className="flex flex-row items-center justify-between p-2 bg-muted">
        <Text className="font-medium text-foreground">Project Files</Text>
        <Button variant="ghost" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </View>

      <ScrollView className="flex-1">{renderFileTree(files)}</ScrollView>
    </View>
  )
}

