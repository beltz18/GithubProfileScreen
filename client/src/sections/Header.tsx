import React from 'react'
import Link from 'next/link'
import { BookOpen, Book, Map, Package, Star } from 'lucide-react'

const Header = () => {
  return (
    <>
      <header className='bg-[#161b22] border-b border-[#30363d]'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
          <nav className='flex md:space-x-8 px-2'>
            <Link
              href='#'
              className='text-[#c9d1d9] hover:text-white flex items-center gap-1 max-md:hidden py-4'
            >
              <BookOpen className='w-4 h-4 mr-1' />
              Overview
            </Link>

            <Link
              href='#'
              className='text-[#c9d1d9] hover:text-white flex items-center gap-1 active py-4'
            >
              <Book className='w-4 h-4 mr-1' />
              Repositories
              <span className='ml-1 px-2 py-0.5 rounded-full bg-[#30363d] text-xs'>50</span>
            </Link>

            <Link
              href='#'
              className='text-[#c9d1d9] hover:text-white flex items-center gap-1 max-md:hidden py-4'
            >
              <Map className='w-4 h-4 mr-1' />
              Projects
            </Link>

            <Link
              href='#'
              className='text-[#c9d1d9] hover:text-white flex items-center gap-1 max-md:hidden py-4'
            >
              <Package className='w-4 h-4 mr-1' />
              Packages
            </Link>

            <Link
              href='#'
              className='text-[#c9d1d9] hover:text-white flex items-center gap-1 max-md:hidden'
            >
              <Star className='w-4 h-4 mr-1' />
              Stars
              <span className='ml-1 px-2 py-0.5 rounded-full bg-[#30363d] text-xs'>6</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header