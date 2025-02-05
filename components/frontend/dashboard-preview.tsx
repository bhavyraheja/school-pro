import * as React from "react"
import {
    Card,
    CardContent,
} from "@/components/ui/card"

import Image from "next/image"

export function DashboardPreview() {
    return (
        <div className="bg-white py-16 sm:py-32">
            <div className="max-w-6xl mx-auto">
                <Card className="w-full py-8">
                    <CardContent>
                        <Image src="/images/dashboard.jpg" alt="Dashboard Preview" width={2016} height={1210} className="w-full" />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
