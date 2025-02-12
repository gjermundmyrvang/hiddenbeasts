import { AnimalDetails } from '@/components/AnimalDetails'
import { facts } from '@/data/animals'
import React from 'react'


const details = facts

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center p-6">
        <AnimalDetails animal={details[3]} />
    </div>
  )
}
