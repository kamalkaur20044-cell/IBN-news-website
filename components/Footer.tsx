import { Inbox } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full  py-16 bg-[#0B1F3A] text-white'>
            <div className='flex flex-col md:flex-row md:flex-wrap justify-around  gap-14 md:gap-18 '>
                <div className='mx-auto  flex  gap-6 md:flex-col md:items-center'>
                    <img src="/images/logo.png" alt='logo' className='h-14 w-auto shrink-0 mb-4' />
                    <h2 className='lg:text-[24px] text-[18px]  font-semibold leading-8'>Latest News : Breaking <br /> News and Updates</h2>
                </div>

                <div className='flex gap-12 mx-auto md:gap-20'>
                    <div>
                        <b className='md:text-sm text-xs uppercase '>HOME</b>
                        <ul className='mt-4 space-y-3 md:text-sm text-xs text-gray-300'>
                            <li><Link href='/about-us' className='hover:text-white transition'>About Us</Link></li>
                            <li><Link href='#' className='hover:text-white transition'>Latest News</Link></li>
                            <li><Link href='#' className='hover:text-white transition'>Blog</Link></li>
                            <li><Link href='#' className='hover:text-white transition'>IBN Punjab News</Link></li>
                        </ul>
                    </div>
                    <div>
                        <b className='md:text-sm text-xs uppercase'>Get Help</b>
                        <ul className='mt-4 space-y-3 md:text-sm text-xs text-gray-300'>
                            <li className='hover:text-white cursor-pointer transition'>Support</li>
                            <li className='hover:text-white cursor-pointer transition'>Pricing</li>
                            <li className='hover:text-white cursor-pointer transition'>Media Kit</li>
                            <li className='hover:text-white cursor-pointer transition'><Link href="/contact-us" >Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='mx-auto'>
                    <p className='md:text-sm text-xs font-bold uppercase'>SUBSCRIBE <span className='font-normal'>To Newsletter</span></p>
                    <label className='mt-4 block md:text-sm text-xs text-gray-300'>Email address</label>
                    <div className='flex mt-2'>
                        <div className='flex gap-2 items-center bg-[#eeecec] text-black p-2 rounded-l-xl'>
                            <Inbox size={18} className='text-gray-500' />
                            <input type='email' className='w-40 bg-transparent outline-none text-xs md:text-sm' placeholder='Email address' />
                        </div>
                        <button className='bg-red-500 text-white px-4 rounded-r-xl text-xs md:text-sm font-semibold hover:bg-red-600 transition'>Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer