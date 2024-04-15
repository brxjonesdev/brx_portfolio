import React from 'react'

export default function CurrentEvents({ children }) {
    return (
        <section className="flex flex-col gap-1 rounded-md bg-lavender-500 px-6 py-3 text-black">
            {children}
        </section>
    )
}
