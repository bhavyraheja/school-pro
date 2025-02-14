"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, Users } from "lucide-react"
import { useEffect, useState } from "react"
import SingleStudentForm from "@/components/dashboard/forms/students/student-form"
import BulkStudentForm from "@/components/dashboard/forms/students/bulk-student-form"
import InfoBanner from "@/components/info-banner"

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
    <div className="w-full max-w-6xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Student Admission</CardTitle>
          <CardDescription className="text-center">Choose between single or bulk student admission</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 ">
              <TabsTrigger
                value="single"
                className="flex items-center justify-center data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Single Student Admission
              </TabsTrigger>
              <TabsTrigger
                value="bulk"
                className="flex items-center justify-center data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                <Users className="w-4 h-4 mr-2" />
                Bulk Student Admission
              </TabsTrigger>
            </TabsList>
            <Card className="border-t-4 border-blue-600 shadow-lg">
              <CardContent className="p-6">
                <TabsContent value="single" className="mt-6">
                <InfoBanner message="Please Make Sure You have already Create the Parent, Class and Stream for the Student" type="warning"/>
      
                  <SingleStudentForm />
                </TabsContent>
                <TabsContent value="bulk" className="mt-6">
                  <BulkStudentForm />
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

