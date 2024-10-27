import React from 'react'
import { Search } from 'lucide-react'
import Pagination from '@com/Pagination'
import ReposData from '@com/ReposData'
import { getReposData } from '@lib/ServerActions'

const Body = async () => {
  const data = await getReposData()

  return (
    <>
      <section className='w-full md:w-3/4'>
        <div className='flex justify-between items-center mb-4 max-sm:hidden'>
          <div className='relative flex-grow mr-4'>
            <input
              type='text'
              placeholder='Find a repository...'
              className='w-full bg-[#0d1117] border border-[#30363d] rounded-md py-1 px-3 pr-10 text-sm text-[#c9d1d9] placeholder-[#8b949e] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent'
            />
            <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8b949e] w-4 h-4' />
          </div>

          <div className='flex space-x-2'>
            <select className='bg-[#21262d] border border-[#30363d] rounded-md px-2 py-1 text-sm text-[#c9d1d9]'>
              <option>Type</option>
            </select>

            <select className='bg-[#21262d] border border-[#30363d] rounded-md px-2 py-1 text-sm text-[#c9d1d9]'>
              <option>Language</option>
            </select>

            <select className='bg-[#21262d] border border-[#30363d] rounded-md px-2 py-1 text-sm text-[#c9d1d9]'>
              <option>Sort</option>
            </select>
          </div>
        </div>

        <div className='flex flex-col gap-4 mt-8 pt-4 border-t border-[#30363d]'>
          <ReposData reposData={ data.data || [] } />
        </div>

        <Pagination />
      </section>
    </>
  )
}

export default Body