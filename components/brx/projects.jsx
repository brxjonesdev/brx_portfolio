'use client'
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
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export default function Projects({ projects }) {
    const [selectedProject, setSelectedProject] = useState(
        projects.length > 0 ? projects[0] : null
    )
    let badgeColor

    if (selectedProject) {
        switch (selectedProject.status) {
            case 'Deployed':
                badgeColor = 'bg-green-500' // or any color representing completion
                break
            case 'On Hiatus':
                badgeColor = 'bg-teal-500' // or any color representing ongoing work
                break
            case 'In Progress':
                badgeColor = 'bg-lavender-500' // or any color representing pending status
                break
            default:
                badgeColor = 'bg-green-500' // or any color for unknown status
                break
        }
    }
    return (
        <section className="space-y-2">
            <h2 className="font-syne text-xl font-semibold">Other Projects</h2>
            <Select
                onValueChange={(value) =>
                    setSelectedProject(
                        projects.find((project) => project.id === value)
                    )
                }
            >
                <div>
                <SelectTrigger className="w-full font-syne font-semibold text-black-100 bg-mauve-700 border-none">
                    <SelectValue placeholder="Select Project" />
                </SelectTrigger>
                <p className='font-inter text-sm ml-3 mb-6 mt-1 '>Select a project to learn more.</p>
                </div>
                <SelectContent>
                    {projects.map((project) => (
                        <SelectItem
                            key={project.id}
                            value={project.id}
                            className="font-syne"
                        >
                            {project.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {selectedProject ? (
                <Card className="col-span-2 row-span-5 flex flex-col border-none bg-mauve-800 ">
                    <CardHeader className="space-y-3">
                        <div className="flex items-center justify-between">
                            <CardTitle className="font-syne">
                                {selectedProject.name}
                            </CardTitle>
                            <Badge
                                variant="secondary"
                                className={`${badgeColor} font-inter text-green-50`}
                            >
                                {selectedProject.status}
                            </Badge>
                        </div>
                        <div className="mt-4 flex items-center gap-4 font-inter">
                            {selectedProject.githubLink && (
                                <Link
                                    href={selectedProject.githubLink}
                                    className="flex items-center gap-2 text-sm"
                                    prefetch={false}
                                >
                                    <GithubIcon className="h-4 w-4" />
                                    GitHub
                                </Link>
                            )}
                            {selectedProject.websiteLink && (
                                <Link
                                    href={selectedProject.websiteLink}
                                    className="flex items-center gap-2 text-sm"
                                    prefetch={false}
                                >
                                    <GlobeIcon className="h-4 w-4" />
                                    Website
                                </Link>
                            )}
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="font-inter text-sm leading-relaxed md:text-base">
                            {selectedProject.description}
                        </p>
                    </CardContent>
                </Card>
            ) : (
                <div className="col-span-2 row-span-5 flex min-h-[300px] flex-col items-center justify-center rounded-sm border-none bg-mauve-500">
                    <p className="md:text-md font-inter text-sm">
                        Select one of my projects to get more info!
                    </p>
                </div>
            )}
        </section>
    )
}

function GithubIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    )
}

function GlobeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    )
}

function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}
