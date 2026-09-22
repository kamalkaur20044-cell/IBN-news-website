import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 flex items-center justify-between px-10 bg-white h-16 shadow-md border-b border-gray-100'>

      {/* Logo */}
      <Link href="/" className='flex-shrink-0'>
        <img src="/images/logo.png" alt='logo' className='h-12 w-auto object-contain' />
      </Link>

      {/* Nav Links */}
      <ul className='flex gap-8 text-[15px] font-medium text-gray-700'>
        <li>
          <Link href="/" className='relative py-1 hover:text-[#C1121F] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#C1121F] hover:after:w-full after:transition-all after:duration-300'>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about-us" className='relative py-1 hover:text-[#C1121F] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#C1121F] hover:after:w-full after:transition-all after:duration-300'>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/news" className='relative py-1 hover:text-[#C1121F] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#C1121F] hover:after:w-full after:transition-all after:duration-300'>
            News
          </Link>
        </li>
        <li>
          <Link href="/IBN-punjab-news" className='relative py-1 hover:text-[#C1121F] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#C1121F] hover:after:w-full after:transition-all after:duration-300'>
            IBN Punjab News
          </Link>
        </li>
      </ul>

      {/* Subscribe Button */}
      <button className='bg-[#C1121F] text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:bg-[#1e3a5f] hover:scale-105'>
        Subscribe
      </button>

    </nav>
  )
}

export default Navbar