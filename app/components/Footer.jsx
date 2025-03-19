import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode? assets.logowhite:assets.logo1} alt='logo' className='w-13 mx-auto mb-2' />

            <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode? assets.mail_icon_dark:assets.mail_icon} alt='mail' className='w-6' />
            tanwaravinash352@gmail.com
            </div>

        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p className='font-Outfit'>@ 2025 Avinash Tanwar. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 font-Outfit'>
                <li><a href="https://github.com/AvinashTanwar01" target='_blank'>Github</a></li>
                <li><a href="https://www.linkedin.com/in/avinash-tanwar/" target='_blank'>Linkedin</a></li>
                
            </ul>
        </div>
    </div>
  )
}

export default Footer