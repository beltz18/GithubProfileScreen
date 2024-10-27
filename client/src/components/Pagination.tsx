'use client'

import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useStorePages } from '@lib/state'

const Pagination = () => {
  const { pages, current, plus, minus } = useStorePages()

  console.log(current, pages)

  return (
    <>
      <div className='mt-6 flex items-center justify-center'>
        <nav className='flex items-center space-x-2' aria-label='Pagination'>
          <button
            className={`relative inline-flex items-center px-2 py-2 text-sm font-medium text-[#8b949e] hover:text-[#c9d1d9]`}
            onClick={minus}
            disabled={pages == 0 || current == 0}
          >
            <ChevronLeft className='h-5 w-5' aria-hidden='true' />
            <span className='ml-1'>Previous</span>
          </button>

          <button
            className={`relative inline-flex items-center px-2 py-2 text-sm font-medium text-[#58a6ff] hover:text-[#1f6feb]`}
            onClick={plus}
            disabled={current == pages}
          >
            <span className='mr-1'>Next</span>
            <ChevronRight className='h-5 w-5' aria-hidden='true' />
          </button>
        </nav>
      </div>
    </>
  )
}

export default Pagination