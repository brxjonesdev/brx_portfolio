import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Logo() {
    return (
        <div className="flex items-center gap-1">
            <Avatar>
                <AvatarImage src="/image2.png" />
                <AvatarFallback>BX</AvatarFallback>
            </Avatar>
            <div className="text-white">
                <h1 className="px-1 font-syne text-lg font-medium">
                    Braxton Jones
                </h1>
                <p className="px-1 font-inter font-normal tracking-wide text-black-700">
                    Software Developer
                </p>
            </div>
        </div>
    )
}
