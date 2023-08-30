import Image from 'next/image';

export default function Header() {
  return (
    <header className='flex items-center justify-center px-4 py-8 border-b bg-gray-100'>
      <Image
        src='/ivan.png'
        width={100}
        height={100}
        alt='Ivan the Rottweiler'
        className='rounded-full mr-3 shadow-lg border-[3px] border-black'
      />
      <h1 className='text-[44px] font-bold'>
        Pup Food
        <span className='block -mt-4'>Calculator</span>
      </h1>
    </header>
  );
}
