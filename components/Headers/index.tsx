import Link from 'next/link';
import { LogoBlue } from '../Logos/LogoBlue';

export const Header = () => {

  return (
    <header className="sticky top-0 bg-white w-full flex items-center justify-center shadow-sm z-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-9/12 max-w-screen-xl pt-3 pb-6">
        <div className="flex gap-4 items-center my-3">
          <LogoBlue />
          <Link href="/">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight cursor-pointer">
              Ungard Digital
            </h2>
          </Link>
        </div>
        <nav className="flex">
          <ul className="flex gap-4">
            <Link href='/'>
              <li className="cursor-pointer hover:text-ungard-blue">Home</li>
            </Link>
            <Link href='/articles'>
              <li className="cursor-pointer hover:text-ungard-blue">Articles</li>
            </Link>
            {/* <Link href='/services'>
              <li className="cursor-pointer hover:text-ungard-blue">Services</li>
            </Link> */}
            <Link href='/contact'>
              <li className="cursor-pointer hover:text-ungard-blue">Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}
