import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

import Link from 'next/link'

export default function AboutMe() {
    return (
        <Card className="rounded-xl border-2 border-black-400 bg-transparent">
            <CardHeader className="">
                <CardTitle className="font-syne text-xl font-semibold text-white">
                    {`Hello, I'm Braxton Jones.`}
                </CardTitle>
    
            </CardHeader>
            <CardContent className="space-y-2 font-inter font-normal leading-6 text-black-900">
                <p>     
                A versatile developer with a passion for creating engaging and entertaining user experiences, 
                I’m currently focused on Starplot. It's a host of tools and resources for helping turn your ideas from concept to a tanigible reality.
                You can learn about how I'm doing that here <a href="https://github.com/brxjonesdev/starplot" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] font-syne text-md">Starplot</a>.
                </p>
            </CardContent>
        </Card>
    )
}
