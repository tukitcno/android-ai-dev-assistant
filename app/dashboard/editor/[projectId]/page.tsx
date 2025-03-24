"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { CodeEditor } from "@/components/editor/code-editor"
import { FileExplorer } from "@/components/editor/file-explorer"
import { Terminal } from "@/components/editor/terminal"
import { EditorHeader } from "@/components/editor/editor-header"
import { AIAssistant } from "@/components/editor/ai-assistant"
import { Play, Save, GitBranch, Settings, Users } from "lucide-react"

export default function EditorPage() {
  const params = useParams()
  const projectId = params.projectId as string

  const [code, setCode] = useState(`// Welcome to DevAssist AI Code Editor
// Start typing to see AI suggestions

function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}

// Example usage:
const cart = [
  { name: 'Product 1', price: 10, quantity: 2 },
  { name: 'Product 2', price: 15, quantity: 1 },
  { name: 'Product 3', price: 20, quantity: 3 }
];

const total = calculateTotal(cart);
console.log('Total:', total);
`)

  const [output, setOutput] = useState("")
  const [activeTab, setActiveTab] = useState("terminal")
  const [fileName, setFileName] = useState("index.js")
  const [isCollaborating, setIsCollaborating] = useState(false)

  const runCode = () => {
    try {
      setOutput("Running code...\n")

      // Simple evaluation for demo purposes
      const result = eval(`
        (function() {
          const logs = [];
          const originalConsoleLog = console.log;
          console.log = (...args) => {
            logs.push(args.join(' '));
            originalConsoleLog(...args);
          };
          
          try {
            ${code}
            return logs.join('\\n');
          } catch (error) {
            return 'Error: ' + error.message;
          } finally {
            console.log = originalConsoleLog;
          }
        })()
      `)

      setOutput((prev) => prev + result)
      setActiveTab("terminal")
    } catch (error) {
      setOutput(`Error: ${error.message}`)
      setActiveTab("terminal")
    }
  }

  const toggleCollaboration = () => {
    setIsCollaborating(!isCollaborating)
  }

  return (
    <div className="flex flex-col h-screen">
      <EditorHeader fileName={fileName} onFileNameChange={setFileName} projectId={projectId} />

      <ResizablePanelGroup direction="horizontal" className="flex-1">
        <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
          <FileExplorer projectId={projectId} />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={60}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={70}>
              <CodeEditor value={code} onChange={setCode} language="javascript" />
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={30}>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
                <div className="border-b px-4">
                  <TabsList className="h-10">
                    <TabsTrigger value="terminal">Terminal</TabsTrigger>
                    <TabsTrigger value="problems">Problems</TabsTrigger>
                    <TabsTrigger value="output">Output</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="terminal" className="flex-1 p-0">
                  <Terminal output={output} />
                </TabsContent>
                <TabsContent value="problems" className="flex-1 p-4">
                  <p className="text-sm text-muted-foreground">No problems detected.</p>
                </TabsContent>
                <TabsContent value="output" className="flex-1 p-4">
                  <p className="text-sm text-muted-foreground">No output to display.</p>
                </TabsContent>
              </Tabs>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
          <AIAssistant code={code} />
        </ResizablePanel>
      </ResizablePanelGroup>

      <div className="border-t p-2 flex items-center justify-between bg-muted/40">
        <div className="flex items-center space-x-2">
          <Button size="sm" onClick={runCode}>
            <Play className="h-4 w-4 mr-1" />
            Run
          </Button>
          <Button size="sm" variant="outline">
            <Save className="h-4 w-4 mr-1" />
            Save
          </Button>
          <Button size="sm" variant="outline">
            <GitBranch className="h-4 w-4 mr-1" />
            Commit
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button size="sm" variant={isCollaborating ? "default" : "outline"} onClick={toggleCollaboration}>
            <Users className="h-4 w-4 mr-1" />
            {isCollaborating ? "Collaborating" : "Collaborate"}
          </Button>
          <Button size="sm" variant="ghost">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

