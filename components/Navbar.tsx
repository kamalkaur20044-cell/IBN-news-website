
'use client'

import { SearchIcon, Menu, X } from 'lucide-react'
import Link from 'next/link'
import{ useState } from 'react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Politics', href: '/about-us' },
  { name: 'Investigations', href: '/news' },
  { name: 'Asian Games', href: '/news' },
  { name: 'Cinema', href: '/news' },
  { name: 'Business', href: '/news' },
  { name: 'World', href: '/IBN-punjab-news' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Navbar */}
      <nav className='hidden md:flex sticky top-0 z-50 items-center justify-between px-10 bg-white h-16 shadow-md border-b border-gray-100'>

        {/* Logo */}
        <Link href='/' className='flex-shrink-0'>
          <img src='/images/logo.png' alt='logo' className='h-14 w-auto object-contain'   />
        </Link>

        {/* Nav Links */}
        <ul className='flex gap-10 text-[15px] font-medium text-gray-700'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className='relative py-1 hover:text-[#C1121F] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#C1121F] hover:after:w-full after:transition-all after:duration-300'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search + Subscribe */}
        <div className='flex gap-4'>

          {/* Search */}
          <div className='flex w-25 border border-gray-200 text-gray-500 py-1 px-2 rounded-full hover:border-gray-900 hover:text-gray-900'>
            <SearchIcon className='shrink-0 pr-2' />

            <input
              type='text'
              placeholder='Search'
              className='w-full text-sm bg-transparent text-gray-700 outline-none border-none placeholder:text-gray-400'
            />
          </div>

          {/* Subscribe */}
          <button className='bg-[#C1121F] text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:bg-[#1e3a5f] hover:scale-105'>
            Subscribe
          </button>

        </div>
      </nav>


      {/* Mobile Navbar */}
      <nav className='flex md:hidden sticky top-0 z-50 items-center justify-between h-16 px-4 bg-white shadow-md border-b border-gray-100'>

        <Link href='/'>
          <img src='/images/logo.png' alt='logo' className='h-12 w-auto object-contain' />
        </Link>

        <div className='flex gap-2 items-center '>
          <SearchIcon size={25} className='text-gray-600 hover:text-gray-900' />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='p-2 text-gray-700'
          >
            {isMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </nav>


      {/* Mobile Menu */}

      <div className={`fixed top-16 right-0 z-40 w-[60%] h-[calc(100vh-4rem)] bg-white shadow-lg transform transition-transform duration-1000 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        <ul className='flex flex-col px-5 py-3'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className='block py-3 text-gray-700 font-medium hover:text-[#C1121F]'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

      </div>

    </>
  )
}

export default Navbar
