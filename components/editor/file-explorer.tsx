"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronDown, ChevronRight, File, Folder, Plus, Search } from "lucide-react"

interface FileItem {
  id: string
  name: string
  type: "file" | "folder"
  children?: FileItem[]
  expanded?: boolean
}

interface FileExplorerProps {
  projectId: string
}

export function FileExplorer({ projectId }: FileExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("")
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
          name: "pages",
          type: "folder",
          children: [
            { id: "7", name: "Home.js", type: "file" },
            { id: "8", name: "About.js", type: "file" },
          ],
        },
        { id: "9", name: "App.js", type: "file" },
        { id: "10", name: "index.js", type: "file" },
      ],
    },
    {
      id: "11",
      name: "public",
      type: "folder",
      children: [
        { id: "12", name: "index.html", type: "file" },
        { id: "13", name: "favicon.ico", type: "file" },
      ],
    },
    {
      id: "14",
      name: "package.json",
      type: "file",
    },
    {
      id: "15",
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
      <div key={item.id}>
        <div
          className={`flex items-center py-1 px-2 hover:bg-accent rounded-sm cursor-pointer`}
          style={{ paddingLeft: `${level * 12 + 8}px` }}
          onClick={() => item.type === "folder" && toggleFolder(item.id)}
        >
          {item.type === "folder" ? (
            <>
              {item.expanded ? (
                <ChevronDown className="h-4 w-4 mr-1 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-4 w-4 mr-1 text-muted-foreground" />
              )}
              <Folder className="h-4 w-4 mr-2 text-blue-500" />
            </>
          ) : (
            <File className="h-4 w-4 ml-5 mr-2 text-muted-foreground" />
          )}
          <span className="text-sm truncate">{item.name}</span>
        </div>

        {item.type === "folder" && item.expanded && item.children && renderFileTree(item.children, level + 1)}
      </div>
    ))
  }

  return (
    <div className="h-full flex flex-col border-r">
      <div className="p-2 border-b">
        <h3 className="font-semibold px-2 py-1.5">Explorer</h3>
        <div className="relative mt-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 h-9 text-sm"
          />
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-2">
        <h4 className="text-sm font-medium">FILES</h4>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <div className="px-2 py-1">{renderFileTree(files)}</div>
      </ScrollArea>
    </div>
  )
}

