import { oleo } from '../app/fonts';
import { outfit } from '../app/fonts';

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center px-4 pt-8 pb-10 border-t-2 bg-[url("/pawBg.png")]'>
      <h3
        className={`${oleo.className} flex items-center text-4xl font-semibold text-amber-900`}
      >
        P<span className='-ml-[1px]'>upster</span>
      </h3>
      <p className={`${outfit.className} text-[16px] pl-1 -mt-1 text-cyan-500`}>
        Canine Calorie Calculator
      </p>
      <hr className='w-1/3 bg-black h-[1.5px] my-2' />
      <p className='text-sm text-center'>
        Created by Chris Davis
        <br />
        for Ivan, Apple and our late beloved Tessa! 🥰
      </p>
    </footer>
  );
}
