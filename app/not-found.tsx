"use client"
import Link from "next/link"
import { AlertCircle, Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-destructive">
          <AlertCircle className="h-10 w-10 text-destructive-foreground" />
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">404 - Page Not Found</h1>

        <p className="mb-8 text-lg text-muted-foreground">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild variant="default" className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Go to Homepage
            </Link>
          </Button>
          <Button variant="outline" className="gap-2" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4" />
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

