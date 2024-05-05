import React from 'react'
import Link from 'next/link'

export default function Project({ name, description, link, color }) {
    return (
        <Link href={link}>
            <div className="flex items-center gap-5 rounded-md bg-black-200 p-4 hover:bg-black-400">
                <div className="flex h-14 min-w-2 items-center justify-center rounded-md bg-mauve"></div>
                <div className="flex flex-col gap-1">
                    <h1 className="font-syne font-semibold text-mauve">
                        {name}
                    </h1>
                    <p className="font-inter text-sm text-white-500">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    )
}
