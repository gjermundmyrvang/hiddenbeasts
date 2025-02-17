import React from 'react';
import Image from 'next/image';

interface Fact {
  id: number;
  fact: string;
}

interface Animal {
  id: number;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  facts: Fact[];
}

interface HomeProps {
  animal: Animal; 
}

export const AnimalDetails: React.FC<HomeProps> = ({ animal }) => {
  return (
      <div className="max-w-4xl w-full bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h1 className='my-10 text-center text-3xl sm:text-6xl md:text-8xl text-white dark:text-white'>{animal.title}</h1>
        <Image 
          src={animal.image.src} 
          alt={animal.image.alt} 
          width={400}
          height={600}
          layout="responsive" 
          className="rounded-lg mb-6"
        />
        <p className="text-lg text-gray-300 text-center mb-6">
          {animal.description}
        </p>
        <div className="p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">Fakta</h2>
          <ul className="space-y-3">
            {animal.facts.map((fact) => (
              <li key={fact.id} className="bg-gray-700 p-4 rounded-md shadow-md">
                <span className="font-bold text-blue-400">{fact.id}:</span> {fact.fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
};
