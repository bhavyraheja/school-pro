"use client";

import * as React from "react";
import { Search, Mail, Phone, MessageCircle } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const articles = [
    {
        id: 1,
        title: "Getting Started Guide",
        excerpt: "Learn the basics of using our platform",
        category: "Basics",
    },
    {
        id: 2,
        title: "Account Management",
        excerpt: "How to manage your account settings",
        category: "Account",
    },
    {
        id: 3,
        title: "Troubleshooting Common Issues",
        excerpt: "Solutions to frequent problems",
        category: "Support",
    },
];

const faqs = [
    {
        question: "What is SchoolPro?",
        answer: "SchoolPro is a platform designed to help manage school operations efficiently.",
    },
    {
        question: "Can SchoolPro adapt to my school's unique requirements?",
        answer: "Yes, SchoolPro is highly customizable to suit different school needs.",
    },
    {
        question: "What are the system requirements for using SchoolPro?",
        answer: "SchoolPro can be accessed on most modern web browsers and devices.",
    },
    {
        question: "How can I migrate my existing school data to SchoolPro?",
        answer: "Our support team can assist you with the data migration process.",
    },
    {
        question: "What kind of support does SchoolPro offer?",
        answer: "We offer email, live chat, and phone support options.",
    },
    {
        question: "Do I need expensive training to use SchoolPro?",
        answer: "No, SchoolPro is designed to be user-friendly and intuitive.",
    },
    {
        question: "How much does SchoolPro cost?",
        answer: "Pricing varies based on your school's size and requirements. Contact us for more information.",
    },
    {
        question: "Is there a long-term contract requirement?",
        answer: "No, we offer flexible subscription plans.",
    },
    {
        question: "How does SchoolPro ensure my school's data security?",
        answer: "We use industry-standard encryption and security measures to protect your data.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept credit cards, PayPal, and bank transfers.",
    },
    {
        question: "Can SchoolPro be installed on our school's servers?",
        answer: "Yes, on-premise installation options are available.",
    },
    {
        question: "Do you offer custom feature development?",
        answer: "Yes, we can develop custom features to suit your school's unique needs.",
    },
];

export default function HelpPage() {
    const [searchQuery, setSearchQuery] = React.useState("");
    const filteredArticles = articles.filter(
        (article) =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            {/* Articles Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Help Articles</h2>

                <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredArticles.map((article) => (
                        <Link href="#" key={article.id}>
                            <Card className="hover:bg-muted/50 transition-colors">
                                <CardHeader>
                                    <CardTitle className="text-lg">{article.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        {article.excerpt}
                                    </p>
                                </CardHeader>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16 bg-blue-50 p-8 rounded-lg">
                <div className="text-center mb-8">
                    <h3 className="text-blue-500 font-medium mb-2">FREQUENTLY ASKED QUESTIONS</h3>
                    <h2 className="text-3xl font-bold">You ask? We <span className="italic">answer</span></h2>
                </div>

                <Accordion type="single" collapsible className="mb-10">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={faq.question}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <p className="text-center text-muted-foreground mb-8">
                    Need further support? <Link href="#" className="text-green-500">Contact us</Link>
                </p>
            </section>
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Email Support */}
                    <div className="border rounded-lg p-6 bg-white shadow-sm">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-blue-100 rounded-full">
                                <Mail className="text-blue-500" />
                            </div>
                            <h3 className="ml-4 text-lg font-semibold">Email Support</h3>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Get in touch with our support team via email.
                        </p>
                        <Button variant="outline" className="w-full">
                            Send Email
                        </Button>
                    </div>

                    {/* Live Chat */}
                    <div className="border rounded-lg p-6 bg-white shadow-sm">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-purple-100 rounded-full">
                                <MessageCircle className="text-purple-500" />
                            </div>
                            <h3 className="ml-4 text-lg font-semibold">Live Chat</h3>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Chat with our support team in real-time.
                        </p>
                        <Button variant="outline" className="w-full">
                            Start Chat
                        </Button>
                    </div>

                    {/* Phone Support */}
                    <div className="border rounded-lg p-6 bg-white shadow-sm">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-green-100 rounded-full">
                                <Phone className="text-green-500" />
                            </div>
                            <h3 className="ml-4 text-lg font-semibold">Phone Support</h3>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Call us directly for immediate assistance.
                        </p>
                        <Button variant="outline" className="w-full">
                            Call Now
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
} 
