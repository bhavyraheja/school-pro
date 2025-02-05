import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import SmallTitle from "./small-title"

export default function HeroSection() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-24 text-center max-w-6xl mx-auto">
     
      <SmallTitle title=" Welcome to SchoolPro"/>

      <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        Your Complete School Management Solution
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
        From admissions to academics, simplify every aspect of school administration with our comprehensive and
        user-friendly platform.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button asChild size="lg" className="h-12 px-8 text-base rounded-full">
          <Link href="/contact-us">Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
          <Link href="/features" className="flex items-center">
            See All features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

