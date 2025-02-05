"use client"

import { AlertOctagon, ArrowLeft, Home, RefreshCw, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-destructive">
          <AlertOctagon className="h-10 w-10 text-destructive-foreground" />
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">500 - Server Error</h1>

        <p className="mb-8 text-lg text-muted-foreground">
          Something went wrong on our end. We're working to fix it. Please try again later.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button variant="outline" onClick={() => window.location.reload() }>
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Page
          </Button>
          <Button variant="outline" onClick={() => window.history.back() }>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
          </Button>
        </div>
      </div>

      <footer className="fixed bottom-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SchoolPro. All rights reserved.
      </footer>
    </main>
  )
}

