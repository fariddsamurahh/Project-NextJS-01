import { BookOpenIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
// import { Inter } from 'next/font/google';
import { inter } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
       className={`${inter.className} flex flex-row items-center leading-none text-white`}
    >
      <BookOpenIcon className="h-12 w-12 rotate-[0deg]" />
      <p className="text-[21px]">Book Store</p>
    </div>
  );
}
