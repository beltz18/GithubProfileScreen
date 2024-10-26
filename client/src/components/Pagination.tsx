'use client'

import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Pagination = () => {
  const previousPage = () => {
    console.log('previous')
  }

  const nextPage = () => {
    console.log('next')
  }

  return (
    <>
      <div className='mt-6 flex items-center justify-center'>
        <nav className='flex items-center space-x-2' aria-label='Pagination'>
          <span
            className='relative inline-flex items-center px-2 py-2 text-sm font-medium text-[#8b949e] hover:text-[#c9d1d9]'
            onClick={previousPage}
          >
            <ChevronLeft className='h-5 w-5' aria-hidden='true' />
            <span className='ml-1'>Previous</span>
          </span>

          <span
            className='relative inline-flex items-center px-2 py-2 text-sm font-medium text-[#58a6ff] hover:text-[#1f6feb]'
            onClick={nextPage}
          >
            <span className='mr-1'>Next</span>
            <ChevronRight className='h-5 w-5' aria-hidden='true' />
          </span>
        </nav>
      </div>
    </>
  )
}

export default Pagination