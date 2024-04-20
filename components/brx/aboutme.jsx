import React from 'react'

export default function AboutMe() {
    return (
        <div className="flex flex-col gap-1 text-white">
            <h2 className="text-md font-syne font-semibold text-white">
                {`About Me:`}
            </h2>
            <p className="text-md font-inter  font-normal text-black-900">
                {`
                Hey! I'm Braxton Jones, a developer based in Annapolis, Maryland. 
                I love creating web applications that are both functional and user-friendly. 
                Outside of coding, you can find me making music.
            `}
            </p>
        </div>
    )
}
