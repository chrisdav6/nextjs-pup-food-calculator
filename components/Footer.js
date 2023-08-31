import { oleo } from '../app/fonts';
import { outfit } from '../app/fonts';

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center px-4 pt-8 pb-10 border-t-2 bg-gray-100'>
      <h3
        className={`${oleo.className} flex items-center text-3xl font-semibold text-amber-900`}
      >
        Pupster
        <span className={`${outfit.className} text-lg pl-1 text-black`}>
          - Pup Calorie Calculator
        </span>
      </h3>
      <p className='text-sm'>
        Created by Chris Davis for Ivan, Apple and Tessa! 🥰
      </p>
    </footer>
  );
}
