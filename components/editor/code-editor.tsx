"use client"

import { useRef } from "react"
import Editor from "@monaco-editor/react"
import { useTheme } from "next-themes"

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  language: string
}

export function CodeEditor({ value, onChange, language }: CodeEditorProps) {
  const { theme } = useTheme()
  const editorRef = useRef<any>(null)

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor
  }

  return (
    <div className="h-full w-full">
      <Editor
        height="100%"
        defaultLanguage={language}
        value={value}
        onChange={(value) => onChange(value || "")}
        theme={theme === "dark" ? "vs-dark" : "light"}
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          wordWrap: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          lineNumbers: "on",
          glyphMargin: true,
          folding: true,
          lineDecorationsWidth: 10,
          lineNumbersMinChars: 3,
        }}
      />
    </div>
  )
}

