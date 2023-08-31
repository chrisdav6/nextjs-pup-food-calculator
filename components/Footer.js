import { oleo } from '../app/fonts';
import { outfit } from '../app/fonts';

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center px-4 pt-8 pb-10 border-t-2 bg-gray-100'>
      <h3
        className={`${oleo.className} flex items-center text-4xl font-semibold text-amber-900`}
      >
        Pupster
      </h3>
      <p className={`${outfit.className} text-[16px] pl-1 -mt-1 text-cyan-500`}>
        Canine Calorie Calculator
      </p>
      <hr className='w-1/3 bg-black h-[1.5px] my-2' />
      <p className='text-sm'>
        Created by Chris Davis for Ivan, Apple and Tessa! 🥰
      </p>
    </footer>
  );
}
