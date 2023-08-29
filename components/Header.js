import Image from 'next/image';

export default function Header() {
  return (
    <header className='flex items-center justify-center p-4 border-b'>
      <Image
        src='/ivan.png'
        width={65}
        height={65}
        alt='Ivan the Rottweiler'
        className='rounded-full mr-3'
      />
      <h1 className='text-2xl font-bold'>Pup Food Calculator</h1>
    </header>
  );
}
