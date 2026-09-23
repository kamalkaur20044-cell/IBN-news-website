import { Inbox } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full  py-16 bg-[#0B1F3A] text-white'>
            <div className='flex justify-center gap-28'>
                <div>
                    <img src="/images/logo.png" alt='logo' className='h-14 shrink-0 mb-4' />
                    <h2 className='text-[24px] font-semibold leading-8'>Latest News : Breaking <br /> News and Updates</h2>
                </div>
                <div>
                    <b className='text-sm uppercase'>HOME</b>
                    <ul className='mt-4 space-y-3 text-sm text-gray-300'>
                        <li><Link href='#' className='hover:text-white transition'>About Us</Link></li>
                        <li><Link href='#' className='hover:text-white transition'>Latest News</Link></li>
                        <li><Link href='#' className='hover:text-white transition'>Blog</Link></li>
                        <li><Link href='#' className='hover:text-white transition'>IBN Punjab News</Link></li>
                    </ul>
                </div>
                <div>
                    <b className='text-sm uppercase'>Get Help</b>
                    <ul className='mt-4 space-y-3 text-sm text-gray-300'>
                        <li className='hover:text-white cursor-pointer transition'>Support</li>
                        <li className='hover:text-white cursor-pointer transition'>Pricing</li>
                        <li className='hover:text-white cursor-pointer transition'>Media Kit</li>
                        <li className='hover:text-white cursor-pointer transition'>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <p className='text-sm font-bold uppercase'>SUBSCRIBE <span className='font-normal'>To Newsletter</span></p>
                    <label className='mt-4 block text-sm text-gray-300'>Email address</label>
                    <div className='flex mt-2'>
                        <div className='flex gap-2 items-center bg-[#eeecec] text-black p-2 rounded-l-xl'>
                            <Inbox size={18} className='text-gray-500' />
                            <input type='email' className='w-40 bg-transparent outline-none text-sm' placeholder='Email address' />
                        </div>
                        <button className='bg-red-500 text-white px-4 rounded-r-xl text-sm font-semibold hover:bg-red-600 transition'>Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer