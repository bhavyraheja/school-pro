import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent} from "@/components/ui/card"
import { UserPlus, Users } from "lucide-react"
import SingleStudentForm from "@/components/dashboard/forms/students/student-form"
import BulkStudentForm from "@/components/dashboard/forms/students/bulk-student-form"
import InfoBanner from "@/components/info-banner"
import { getAllClasses } from "@/actions/classes"
import { getAllParents } from "@/actions/parents"

export default async function AdmissionTabs() {
  const classes = await getAllClasses() || [];
  const parents = await getAllParents() || [];
  return (
    <div className="w-full max-w-5xl mx-auto p-6">
          <Tabs defaultValue="single" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 ">
              <TabsTrigger
                value="single"
                className="flex items-center justify-center data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-300 ease-in-out"
              >
                <UserPlus className="w-5 h-5" />
                Single Student Admission
              </TabsTrigger>
              <TabsTrigger
                value="bulk"
                className="flex items-center justify-center data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-300 ease-in-out"
              >
                <Users className="w-4 h-4 mr-2" />
                Bulk Student Admission
              </TabsTrigger>
            </TabsList>
            <Card className="border-t-4 border-blue-600 shadow">
              <CardContent className="p-6">
                <TabsContent value="single" className="mt-0">
                  <InfoBanner message="Please Make Sure You have already Create the Parent, Class and Stream for the Student" type="warning" />

                  <SingleStudentForm parents={parents} classes={classes}/>
                </TabsContent>
                <TabsContent value="bulk" className="mt-0">
                  <BulkStudentForm />
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
    </div>
  )
}

