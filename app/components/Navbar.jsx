import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode,setIsDarkMode}) => {
    const sideMenuRef = useRef();
    const [isScroll, setIsScroll] = useState(false);

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(0)';
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(100%)';
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>  
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='header' className='w-full' />
            </div>
            <nav className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
                isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""
            }`}>
                <a href="#top">
                    <Image src={isDarkMode ? assets.logowhite:assets.logo1} alt="logo" className='w-13 cursor-pointer h-13 ' />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "":"bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"} `}>
                    <li><a href="#top" className='font-body'>Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#work">My Work</a></li>
                    <li><a href="#certificate">Certifications</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={()=>setIsDarkMode(prev=>!prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="mode" className='w-6 cursor-pointer' />
                    </button>
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 '>
                        Contact
                        <Image src={isDarkMode?  assets.arrow_icon_dark:assets.arrow_icon} alt='arrow' className='w-3'/>
                    </a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={isDarkMode? assets.menu_white:assets.menu_black} alt="menu" className='w-6' />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDarkMode? assets.close_white :assets.close_black} alt='close' className='w-5 cursor-pointer' />
                    </div>
                    <li><a href="#top" className='font-body' onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" className='font-body' onClick={closeMenu}>About Me</a></li>
                    <li><a href="#services" className='font-body' onClick={closeMenu}>Services</a></li>
                    <li><a href="#work" className='font-body' onClick={closeMenu}>My Work</a></li>
                    <li><a href="#certificate" className='font-body' onClick={closeMenu}>Certifications</a></li>
                    <li><a href="#contact" className='font-body' onClick={closeMenu}>Contact Me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
