import Image from 'next/image';
import { oleo } from '../app/fonts';
import { outfit } from '../app/fonts';

export default function Header() {
  return (
    <header className='flex items-center justify-center px-4 py-8 border-b-2 bg-gray-100'>
      <Image
        src='/ivan.png'
        width={100}
        height={100}
        alt='Ivan the Rottweiler'
        className='rounded-full mr-3 shadow-lg border-[3px] border-black'
      />
      <h1
        className={`${oleo.className} text-[60px] font-bold text-amber-900 drop-shadow-lg -mt-5`}
      >
        Pupster
        <span
          className={`${outfit.className} block -mt-3 text-lg text-cyan-500`}
        >
          Canine Calorie Calculator
        </span>
      </h1>
    </header>
  );
}
