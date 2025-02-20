"use client"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, Building, Calendar, Globe, Mail, MapPin, Phone, User } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Card, CardContent } from "../ui/card"
import { Value } from "@radix-ui/react-select"

interface Contact {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    school: string;
    country: string;
    schoolPage: string;
    students: number;
    role: string;
    media: string;
    createdAt: string;
}

interface ContactInfoModalProps {
    contact: Contact;
    trigger?: React.ReactNode;
}

export default function ContactInfoModal({ contact, trigger }: ContactInfoModalProps) {
    const [isOpen, setIsOpen] = useState(false)

    const infoCards = [
        { icon: Mail, label: "Email", value: contact.email },
        { icon: Phone, label: "Phone", value: contact.phone },
        { icon: Building, label: "School", value: contact.school },
        { icon: MapPin, label: "Country", value: contact.country },
        { icon: Globe, label: "School Page", value: contact.schoolPage },
        { icon: User, label: "Students", value: String(contact.students) },
        { icon: Briefcase, label: "Role", value: contact.role },
        { icon: Calendar, label: "Joined", value: new Date(contact.createdAt).toLocaleDateString() },
    ]
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {trigger || <Button variant="outline">View</Button>}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:max-w-[700] lg:max-w-[900px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-4">
                        <Avatar className="w-16 h-16">
                            <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${contact.fullName}`} alt={contact.fullName} />
                            <AvatarFallback> {contact.fullName.split(" ").map((n) => n[0]).join("")} </AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="text-2xl font-bold">{contact.fullName}</h2>
                            <Badge variant="secondary" className="mt-1">
                                Via {contact.media}
                            </Badge>
                        </div>
                    </DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* {infoCards.map((card, index) => (
                        <Card key={index} className="overflow-hidden">
                            <CardContent className="p-4"></CardContent>

                        </Card>
                    ))} */}
                    {infoCards.map((card, index) => (
                        <Card key={index} className="overflow-hidden">
                            <CardContent className="p-4 flex flex-col items-start gap-2">
                                <div className="flex items-center gap-2">
                                    <card.icon className="w-5 h-5 text-gray-600" />
                                    <span className="font-medium">{card.label}</span>
                                </div>
                                <p className="text-sm text-gray-900">{card.value}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}

