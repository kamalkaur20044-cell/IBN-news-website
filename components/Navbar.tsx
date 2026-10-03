
'use client'
import { SearchIcon, Menu, X, Home, Video, Flame, Newspaper } from 'lucide-react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
  const [search, setsearch] =useState("")
  const router =useRouter();

  const handleSearch =()=>{
    const query =search.trim()
    if(!query) return
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

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
            <button type='button' onClick={handleSearch} aria-label='Search'> <SearchIcon className='shrink-0 pr-2' /></button>

            <input
              type='text'
              placeholder='Search'
              value={search} onChange={(e)=>setsearch(e.target.value)} 
              onKeyDown={(e)=>{
                  if(e.key === "Enter"){
                    handleSearch()
                  }
              }}
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

        <div className='flex gap-2 items-center'>
          <Link
            href='/search'
            aria-label='Search'
            className='p-2 text-gray-600 hover:text-[#C1121F] transition-colors'
          >
            <SearchIcon size={24} />
          </Link>
        </div>

      </nav>


          {/* Mobile Menu Backdrop Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className='fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity backdrop-blur-xs'
          aria-hidden='true'
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-16 right-0 z-40 w-[70%] max-w-xs h-[calc(100vh-4rem-4rem)] bg-white shadow-2xl border-l border-gray-100 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='p-4 border-b border-gray-100 flex items-center justify-between'>
          <span className='font-bold text-gray-800 text-sm tracking-wide uppercase'>Categories</span>
          <button
            type='button'
            onClick={() => setIsMenuOpen(false)}
            aria-label='Close drawer'
            className='p-1 text-gray-500 hover:text-gray-800'
          >
            <X size={20} />
          </button>
        </div>

        <ul className='flex flex-col px-4 py-2 overflow-y-auto max-h-[calc(100%-3.5rem)]'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className='block py-3 px-2 text-gray-700 font-medium hover:text-[#C1121F] border-b border-gray-50 transition-colors text-sm'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

            {/* Fixed Mobile Bottom Navigation Bar */}
      <nav 
        aria-label='Mobile Bottom Navigation' 
        className='fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.06)] md:hidden pb-[env(safe-area-inset-bottom)]'
      >
        <div className='flex items-center justify-around h-16 px-1'>
          
          {/* Home Tab */}
          <Link
            href='/'
            onClick={() => setIsMenuOpen(false)}
            className='flex flex-col items-center justify-center flex-1 py-1 text-gray-600 hover:text-[#C1121F] active:text-[#C1121F] transition-colors group'
          >
            <Home size={20} className='transition-transform group-hover:scale-110' />
            <span className='text-[11px] font-medium mt-1 leading-none'>Home</span>
          </Link>

          {/* Videos Tab */}
          <Link
            href='/videos'
            onClick={() => setIsMenuOpen(false)}
            className='flex flex-col items-center justify-center flex-1 py-1 text-gray-600 hover:text-[#C1121F] active:text-[#C1121F] transition-colors group'
          >
            <Video size={20} className='transition-transform group-hover:scale-110' />
            <span className='text-[11px] font-medium mt-1 leading-none'>Videos</span>
          </Link>

          {/* Punjab News Tab */}
          <Link
            href='/IBN-punjab-news'
            onClick={() => setIsMenuOpen(false)}
            className='flex flex-col items-center justify-center flex-1 py-1 text-gray-600 hover:text-[#C1121F] active:text-[#C1121F] transition-colors group'
          >
            <Flame size={20} className='transition-transform group-hover:scale-110' />
            <span className='text-[11px] font-medium mt-1 leading-none'>Punjab</span>
          </Link>

          {/* News Tab */}
          <Link
            href='/news'
            onClick={() => setIsMenuOpen(false)}
            className='flex flex-col items-center justify-center flex-1 py-1 text-gray-600 hover:text-[#C1121F] active:text-[#C1121F] transition-colors group'
          >
            <Newspaper size={20} className='transition-transform group-hover:scale-110' />
            <span className='text-[11px] font-medium mt-1 leading-none'>News</span>
          </Link>

          {/* Menu / Drawer Toggle Tab */}
          <button
            type='button'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors group ${
              isMenuOpen ? 'text-[#C1121F]' : 'text-gray-600 hover:text-[#C1121F]'
            }`}
          >
            {isMenuOpen ? (
              <X size={20} className='transition-transform group-hover:scale-110' />
            ) : (
              <Menu size={20} className='transition-transform group-hover:scale-110' />
            )}
            <span className='text-[11px] font-medium mt-1 leading-none'>Menu</span>
          </button>

        </div>
      </nav>


    </>
  )
}

export default Navbar
