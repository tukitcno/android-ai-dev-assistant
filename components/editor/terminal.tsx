interface TerminalProps {
  output: string
}

export function Terminal({ output }: TerminalProps) {
  return (
    <div className="h-full bg-black text-green-400 font-mono p-4 overflow-auto">
      <pre className="text-sm whitespace-pre-wrap">
        {output || "> Terminal ready. Run your code to see output here."}
      </pre>
    </div>
  )
}

