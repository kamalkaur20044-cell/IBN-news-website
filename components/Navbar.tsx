import Link from 'next/link'
import "../styles/global.css"
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex mx-auto items-center justify-evenly bg-[var(--primary-color)]  text-lg text-[var(--text-color)] h-12 '>
      <Link href="/">Logo</Link>

      <ul className='flex gap-14'>
        <li ><Link href="/">Home</Link></li>
        <li><Link href="/about-us" >About Us</Link> </li>
        <li><Link href="/news" >News</Link></li>
        <li><Link href="/IBN-punjab-news" >IBN Punjab News</Link></li>
      </ul>

      <div>
        search
      </div>

    </nav>
  )
}

export default Navbar