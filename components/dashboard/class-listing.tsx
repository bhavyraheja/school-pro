"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { GraduationCap, ChevronLeft, Users, Pencil, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollArea } from "../ui/scroll-area"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import ClassForm from "./forms/academics/class-form"
import StreamForm from "./forms/academics/stream-form"

interface ClassItem {
    id: number;
    name: string;
    sections: number;
    totalStudent: number;
}

interface Section {
    name: string;
    students: number;
    classTeacher: string;
}

interface SectionsData {
    [key: number]: Section[];
}

// Sample data
const classes: ClassItem[] = [
    { id: 5, name: "Class 5", sections: 3, totalStudent: 120 },
    { id: 6, name: "Class 6", sections: 2, totalStudent: 80 },
    { id: 7, name: "Class 7", sections: 4, totalStudent: 160 },
    { id: 8, name: "Class 8", sections: 3, totalStudent: 115 },
    { id: 9, name: "Class 9", sections: 2, totalStudent: 75 },
]

const sections: SectionsData = {
    5: [
        { name: "5A", students: 40, classTeacher: "Ms. Sarah" },
        { name: "5B", students: 38, classTeacher: "Mr. John" },
        { name: "5C", students: 42, classTeacher: "Ms. Emily" },
    ],
}

export default function ClassListing() {
    const [selectedClass, setSelectedClass] = useState<number>(classes[0]?.id || 5);

    return (
        <div className="grid lg:grid-cols-[280px_1fr] h-[calc(100vh-2rem)] max-h-[calc(100vh-2rem)] gap-2 p-4 pt-2">
            {/* Left Sidebar */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2 px-4 py-2">
                    <div className="flex items-center gap-2">
                        <GraduationCap className="h-6 w-6" />
                        <h1 className="text-xl font-semibold">Classes</h1>
                    </div>
                    <ClassForm />
                </div>

                <div className="px-4 py-2">
                    <Input placeholder="Search classes..." className="h-9" type="search" />
                </div>

                <ScrollArea className="flex-1">
                    <div className="px-2 space-y-3">
                        {classes.map((classItem) => (
                            <div
                                key={classItem.id}
                                className={cn(
                                    "flex items-center justify-between gap-2 rounded-lg px-3 py-2 transition-colors",
                                    selectedClass === classItem.id
                                        ? "bg-accent text-accent-foreground"
                                        : "hover:bg-muted text-muted-foreground"
                                )}
                            >
                                <button
                                    onClick={() => setSelectedClass(classItem.id)}
                                    className="flex flex-col items-start gap-1 text-left"
                                >
                                    <div className="flex w-full items-center justify-between">
                                        <span className="font-medium">{classItem.name}</span>
                                        <span className="text-xs">{classItem.sections} sections</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Users className="h-3 w-3" />
                                        {classItem.totalStudent} students
                                    </div>
                                </button>

                                <div className="flex items-center gap-1">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-7 w-7">
                                                    <Pencil className="h-3 w-3" />
                                                    <span className="sr-only">Edit Class</span>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Edit Class</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-7 w-7">
                                                    <Trash2 className="h-3 w-3" />
                                                    <span className="sr-only">Delete Class</span>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Delete Class</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-2 rounded-lg border bg-card">
                <div className="flex items-center justify-between gap-2 px-4 py-2 border-b">
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ChevronLeft className="h-4 w-4" />
                            <span className="sr-only">Go back</span>
                        </Button>
                        <div>
                            <h2 className="text-lg font-semibold">
                                {classes.find((c) => c.id === selectedClass)?.name}
                            </h2>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <span>Classes</span>
                                <span>/</span>
                                <span>{classes.find((c) => c.id === selectedClass)?.name}</span>
                            </div>
                        </div>
                    </div>
                    <StreamForm />
                </div>

                <div className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {sections[selectedClass]?.map((section) => (
                        <Card key={section.name}>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">{section.name}</CardTitle>
                                <CardDescription>
                                    Class Teacher: {section.classTeacher}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Users className="h-4 w-4" />
                                        {section.students} students
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Button variant="ghost" size="icon" aria-label="Edit Section">
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" aria-label="Delete Section">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )) || <p className="text-muted-foreground">No sections available for this class.</p>}
                </div>
            </div>
        </div>
    )
}
