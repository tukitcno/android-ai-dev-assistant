"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Check, Edit2, X } from "lucide-react"

interface EditorHeaderProps {
  fileName: string
  onFileNameChange: (name: string) => void
  projectId: string
}

export function EditorHeader({ fileName, onFileNameChange, projectId }: EditorHeaderProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(fileName)

  const handleSave = () => {
    onFileNameChange(editValue)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditValue(fileName)
    setIsEditing(false)
  }

  return (
    <div className="flex items-center justify-between p-2 border-b bg-muted/40">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/dashboard">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>

        {isEditing ? (
          <div className="flex items-center">
            <Input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="h-8 w-48 text-sm"
              autoFocus
            />
            <Button variant="ghost" size="icon" onClick={handleSave} className="h-8 w-8 ml-1">
              <Check className="h-4 w-4 text-green-500" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleCancel} className="h-8 w-8">
              <X className="h-4 w-4 text-red-500" />
            </Button>
          </div>
        ) : (
          <div className="flex items-center">
            <span className="font-medium mr-2">{fileName}</span>
            <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)} className="h-6 w-6">
              <Edit2 className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>

      <div className="text-sm text-muted-foreground">
        Project: {projectId === "new" ? "New Project" : `Project ${projectId}`}
      </div>
    </div>
  )
}

