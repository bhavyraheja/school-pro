"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, Users } from "lucide-react"
import { useEffect, useState } from "react"
import SingleStudentForm from "@/components/dashboard/forms/students/student-form"
import BulkStudentForm from "@/components/dashboard/forms/students/bulk-student-form"
import ParentForm from "@/components/dashboard/forms/users/parent-form"

export default function StudentAdmissionTabs() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<string>("single")

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab === "single" || tab === "bulk") {
      setActiveTab(tab)
    }
  }, [searchParams])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    router.push(`?tab=${value}`, { scroll: false })
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <Card className="border-t-4 border-blue-600 shadow">
        <CardContent className="p-6">
          <ParentForm />
        </CardContent>
      </Card>
    </div>
  )
}

