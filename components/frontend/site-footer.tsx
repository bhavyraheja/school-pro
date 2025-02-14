import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Logo from "../logo";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

export default function SiteFooter() {
    return (
        <footer className="w-full bg-[#6366F1] text-white">
            <div className="container px-4 py-16 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info Section */}
                    <div className="space-y-4">
                        <Logo variant="dark" />
                        <p className="text-sm text-white/90">
                            From admissions to academics, simplify every aspect of school administration with our comprehensive and user-friendly platform.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="rounded-full bg-white p-2 hover:bg-white/90">
                                <Twitter className="h-4 w-4 text-[#6366F1]" />
                            </Link>
                            <Link href="#" className="rounded-full bg-white p-2 hover:bg-white/90">
                                <Instagram className="h-4 w-4 text-[#6366F1]" />
                            </Link>
                            <Link href="#" className="rounded-full bg-white p-2 hover:bg-white/90">
                                <Linkedin className="h-4 w-4 text-[#6366F1]" />
                            </Link>
                            <Link href="#" className="rounded-full bg-white p-2 hover:bg-white/90">
                                <Facebook className="h-4 w-4 text-[#6366F1]" />
                            </Link>
                        </div>
                    </div>

                    {/* Get In Touch Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Get In Touch</h3>
                        <div className="space-y-2 text-sm">
                            <p>support@pagedone.com</p>
                            <p>+91 945 658 3256</p>
                            <p>61–A, Elm street, Gujarat, India.</p>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <nav className="flex flex-col space-y-2">
                                <Link className="hover:underline" href="#">Home</Link>
                                <Link className="hover:underline" href="#">FAQs</Link>
                                <Link className="hover:underline" href="#">Price Plan</Link>
                                <Link className="hover:underline" href="/school-onboarding">Admin</Link>
                            </nav>
                            <nav className="flex flex-col space-y-2">
                                <Link className="hover:underline" href="#">Careers</Link>
                                <Link className="hover:underline" href="#">About</Link>
                                <Link className="hover:underline" href="#">Contact</Link>
                                <Link className="hover:underline" href="#">Products</Link>
                            </nav>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Newsletter</h3>
                        <div className="space-y-2">
                            <Input
                                type="email"
                                placeholder="Enter email.."
                                className="bg-transparent text-white placeholder-white focus:ring-2 focus:ring-white"
                            />
                            <Button className="w-full bg-white text-[#6366F1] hover:bg-white/90">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8 text-sm text-white/70">
                    Copyright ©2025 All Right Reserved Pagedone.
                </div>
            </div>
        </footer>
    );
}
