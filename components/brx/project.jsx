import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Project({
    name,
    description,
    link,
    techStack,
    photos,
}) {
    return (
        <Link href={link}>
            <div className="flex items-center gap-5 rounded-md bg-black-200 p-4 hover:bg-black-400">
                <div className="flex h-16 min-w-2 max-w-2 items-center justify-center rounded-md bg-mauve"></div>
                <div className="flex flex-col gap-3">
       
                <div className="flex flex-col gap-1">
                    <h1 className="font-syne font-semibold text-mauve">
                        {name}
                    </h1>
                    <p className="font-inter text-sm text-white-500">
                        {description}
                    </p>
                    <div className="flex gap-2 flex-wrap mt-2">
                        {techStack?.map((tech, index) => (
                            <p
                                key={index}
                                className="rounded-md bg-mauve-800 px-3 py-1 font-inter text-xs font-semibold text-lavender-400"
                            >
                                {tech}
                            </p>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        {photos?.map((photo, index) => (
                            <Image
                                key={index}
                                src={photo}
                                alt={name}
                                className="h-16 w-16 rounded-md"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}
