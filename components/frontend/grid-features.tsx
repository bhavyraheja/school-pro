import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Play, Maximize2 } from "lucide-react"

export default function GridFeatures() {
  return (
    <section className="container max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">All-in-One School Management Platform</h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
          Streamline your entire school operations with our comprehensive suite of integrated modules designed
          specifically for modern educational institutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Student Information System Card */}
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Student Information System</CardTitle>
            <p className="text-muted-foreground">
              Centralized student data management with digital enrollment, profile tracking, and academic records in one
              secure location.
            </p>
          </CardHeader>
          <CardContent>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/images/student-information-system.jpg" // Placeholder image path (replace with actual)
                alt="Student Information System Interface"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-background/95 p-4">
                <div className="flex items-center gap-4">
                  <button className="p-2 rounded-full bg-primary text-primary-foreground">
                    <Play className="h-4 w-4" />
                  </button>
                  <div className="flex-1 h-1 bg-muted rounded-full">
                    <div className="w-1/3 h-full bg-primary rounded-full" />
                  </div>
                  <button className="p-2">
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Search for student records..."
                  className="w-full mt-4 p-2 rounded-md bg-background border"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Academic Excellence Suite Card */}
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Academic Excellence Suite</CardTitle>
            <p className="text-muted-foreground">
              Comprehensive tools for curriculum planning, examination management, and automated grading with detailed
              performance analytics.
            </p>
          </CardHeader>
          <CardContent>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/images/academic-excellence-suite.jpg" // Placeholder image path (replace with actual)
                alt="Academic Excellence Suite Interface"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-background/95 p-4">
                <div className="flex items-center gap-4">
                  <button className="p-2 rounded-full bg-primary text-primary-foreground">
                    <Play className="h-4 w-4" />
                  </button>
                  <div className="flex-1 h-1 bg-muted rounded-full">
                    <div className="w-1/3 h-full bg-primary rounded-full" />
                  </div>
                  <button className="p-2">
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Search for course materials..."
                  className="w-full mt-4 p-2 rounded-md bg-background border"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
