import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 flex items-center justify-between px-10 bg-white h-16 shadow-md border-b border-gray-100'>

      {/* Logo */}
      <Link href="/" className='flex-shrink-0'>
        <img src="/images/logo.png" alt='logo' className='h-14 w-auto object-contain' />
      </Link>

      {/* Nav Links */}
      <ul className='flex gap-10 text-[15px] font-medium text-gray-700'>
        <li>
          <Link href="/" className='relative py-1 hover:text-[#C1121F] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#C1121F] hover:after:w-full after:transition-all after:duration-300'>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about-us" className='relative py-1 hover:text-[#C1121F] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#C1121F] hover:after:w-full after:transition-all after:duration-300'>
            Politics
          </Link>
        </li>
        <li>
          <Link href="/news" className='relative py-1 hover:text-[#C1121F] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#C1121F] hover:after:w-full after:transition-all after:duration-300'>
            Investigations
          </Link>
        </li>
        <li>
          <Link href="/news" className='relative py-1 hover:text-[#C1121F] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#C1121F] hover:after:w-full after:transition-all after:duration-300'>
            Asian Games
          </Link>
        </li>
        <li>
          <Link href="/news" className='relative py-1 hover:text-[#C1121F] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#C1121F] hover:after:w-full after:transition-all after:duration-300'>
            Cinema
          </Link>
        </li>
        <li>
          <Link href="/news" className='relative py-1 hover:text-[#C1121F] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#C1121F] hover:after:w-full after:transition-all after:duration-300'>
            Business
          </Link>
        </li>
        <li>
          <Link href="/IBN-punjab-news" className='relative py-1 hover:text-[#C1121F] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#C1121F] hover:after:w-full after:transition-all after:duration-300'>
            World
          </Link>
        </li>
      </ul>



      {/* Subscribe Button */}
      <div className='flex gap-4'>
        {/* search bar */}
        <div className="flex w-25 border-1 border-gray-200 text-gray-500 py-1 px-2 rounded-full hover:border-gray-900 hover:text-gray-900">
          <SearchIcon className='shrink-0 pr-2' />
          <input type="text" placeholder="Search " className="w-full text-sm bg-transparent text-gray-700 outline-none border-none placeholder:text-gray-400" />
        </div>

        <button className='bg-[#C1121F] text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:bg-[#1e3a5f] hover:scale-105'>
          Subscribe
        </button>
      </div>

    </nav>
  )
}

export default Navbar