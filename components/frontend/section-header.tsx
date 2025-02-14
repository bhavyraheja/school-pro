import React from 'react'
import SmallTitle from './small-title'

export default function SectionHeader({ title, heading, description }: { title: string,heading: string, description: string }) {
    return (
        <div className="flex  flex-col items-center justify-center space-y-4 text-center">
        {title && <SmallTitle title={title}/>}
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
        {heading}
        </h1>

      <p className="max-w-[900px] text-muted-foreground text-lg sm:text-xl">
        {description}
      </p>
      </div>
        
        
    )
}
