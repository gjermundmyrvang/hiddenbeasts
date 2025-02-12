import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type AnimalProps = {
    name: string;
    id: number
    image: { src: string; alt: string };
    facts: string[];
    href: string;
};

export const AnimalCard = ({ props}: { props: AnimalProps}) => {
    const bg = props.id % 2 === 0 ? 'bg-slate-900 text-white' : 'bg-white text-gray-900';
    
    return (
        <div className={`w-full max-w-4xl my-10 p-6 rounded-2xl shadow-lg ${bg} transition-all duration-300`}>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center border-b pb-2'>{props.name}</h1>
            <div className='grid md:grid-cols-2 gap-6 mt-5 items-center'>
                <ul className='list-inside space-y-2 text-lg list-none mb-4'>
                    {props.facts.map((fact, i) => (
                        <li key={`fact-${i+1}`} className='border-l-4 pl-3 border-blue-500'>
                            <strong>{i + 1}:</strong> {fact}
                        </li>
                    ))}
                </ul>
                <div className='relative w-full h-64 md:h-auto rounded-lg overflow-hidden shadow-md'>
                    <Image src={props.image.src} alt={props.image.alt} layout='responsive' width={500} height={500} />
                </div>
            </div>
            <Link
                href={`/animal#${props.id}`}
                className="block mt-5 text-center text-blue-500 hover:underline text-lg font-semibold"
             >
                Les mer
             </Link>
        </div>
    );
};