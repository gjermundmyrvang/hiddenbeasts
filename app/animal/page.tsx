import { AnimalDetails } from '@/components/AnimalDetails'
import { facts } from '@/data/animals'
import React from 'react'


const details = facts

export default function Home() {
  
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center p-6 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      {details.map((d) => (
        <div id={`${d.id}`} key={d.id} className='my-10'>
          <AnimalDetails animal={d} />
        </div>
      ))}
    </div>
  )
}
