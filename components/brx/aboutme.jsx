import React from 'react'

export default function AboutMe() {
    return (
        <div className="flex flex-col gap-1 text-white">
            <h2 className="text-md font-syne font-semibold text-white">
                {`About Me:`}
            </h2>
            <p className="text-md font-inter font-normal text-black-900 ">
        
                Hey! I&apos;m Braxton Jones, a developer based in Annapolis, Maryland. 
                I love creating web applications that are both functional and enjoyable to interact with. 
                As well as coding, I also enjoy creating music in my free time and learning new things about UI Design.
                
            </p>
            <p className='text-md font-inter font-normal text-black-900 '>
            Currently, I&apos;m working on two projects:<br/> <span className='italic text-purple-400'>MisoMoney</span>, an choose-your-own-adventure budgeting app, and <span className='italic text-purple-400'>StudioSuede</span>, a learning platform focused on teaching synthesis techniques.
            </p>
        </div>
    )
}
