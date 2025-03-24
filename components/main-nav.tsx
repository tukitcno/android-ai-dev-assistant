"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Code } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()
  const isLoggedIn = pathname.startsWith("/dashboard")

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Code className="h-6 w-6" />
        <span className="font-bold">DevAssist AI</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/features"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/features" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/pricing" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Pricing
        </Link>
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Docs
        </Link>
        {isLoggedIn && (
          <Link
            href="/dashboard"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname.startsWith("/dashboard") ? "text-foreground" : "text-foreground/60",
            )}
          >
            Dashboard
          </Link>
        )}
      </nav>
    </div>
  )
}

