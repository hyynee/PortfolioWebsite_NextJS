import React from 'react'
import Link from 'next/link'
import { Button } from './button'
import Navbar from './Navbar'
import MobileNav from '../MobileNav'
const Header = () => {
  return (
    <header className='py-8 xl:py-12'>
        <div className='container mx-auto flex justify-between items-center'>
            {/* lOGO */}
            <Link href="/">
            <h1 className='text-4xl font-semibold'>HuyAnh</h1>
            </Link>


            {/* desktop NAV */}
            <div className="hidden xl:flex items-center gap-8">
            <Navbar></Navbar>
            <Link href="/contact">
                <Button>Hire Me</Button>
            </Link>
            </div>

            {/* mobile NAV */}
            <div className='xl:hidden'>
                <MobileNav></MobileNav>
            </div>

        </div>
    </header>
  )
}

export default Header