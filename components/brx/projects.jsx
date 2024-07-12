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
    const [selectedProject, setSelectedProject] = useState(null)
    let badgeColor

    if(selectedProject){
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
    }}
    return (
        <section className="flex grid-cols-3 grid-rows-5 flex-col-reverse gap-4 pt-3 md:grid ">
            {selectedProject ? (
                <Card className="col-span-2 row-span-5 flex flex-col border-none bg-mauve-500">
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
                        <p className="font-inter text-sm leading-relaxed text-muted-foreground md:text-base">
                            {selectedProject.description}
                        </p>
                    </CardContent>
                </Card>
            ) : (
                <div className="col-span-2 row-span-5 flex flex-col rounded-sm border-none bg-mauve-500 min-h-[300px] items-center justify-center">
                    <p className="font-inter text-sm md:text-md">Select one of my projects to get more info!</p>
                </div>
            )}

            <div className="col-start-3 row-span-5 hidden gap-3 rounded bg-black-500 p-3 md:flex md:flex-col">
                {projects.map((project) => (
                    <button
                        className="rounded-lg bg-black-400 p-3 font-syne font-semibold text-white-800 hover:bg-mauve-500"
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                    >
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className="w-full">
                                    <p className="text-xs md:text-base">
                                        {project.name}
                                    </p>
                                </TooltipTrigger>
                                <TooltipContent className="hidden md:block">
                                    {project.tagline}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </button>
                ))}
            </div>

            <Select
                onValueChange={(value) =>
                    setSelectedProject(
                        projects.find((project) => project.id === value)
                    )
                }
            >
                <SelectTrigger className="w-full font-syne font-semibold md:hidden">
                    <SelectValue placeholder="Select Project" />
                </SelectTrigger>
                <SelectContent>
                    {projects.map((project) => (
                        <SelectItem
                            key={project.id}
                            value={project.id}
                            className="font-inter"
                        >
                            {project.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
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
