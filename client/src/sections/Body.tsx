import React from 'react'
import { Search, Star } from 'lucide-react'
import Pagination from '@com/Pagination'

const Body = () => {
  const repos = [
    {
      name: '2024Portfolio',
      description: 'My new Portfolio based on my experience in 2024',
      isPublic: true,
      stars: 1,
      updatedAt: 'Updated last week'
    },
    {
      name: 'CountryInfoApp',
      description: 'App in Nextjs and Nodejs to render a list of countries, with its data as population and borders',
      isPublic: true,
      language: 'TypeScript',
      stars: 1,
      updatedAt: 'Updated 2 weeks ago'
    },
    {
      name: 'Whatsapp_Bot',
      description: 'WhatsApp bot connected to ChatGpt for instant messaging automation.',
      isPublic: true,
      language: 'JavaScript',
      updatedAt: 'Updated 2 weeks ago'
    },
    {
      name: 'pokemonoma',
      description: 'This is a PWA created as a technical test for Monoma Company',
      isPublic: true,
      language: 'TypeScript',
      updatedAt: 'Updated 2 weeks ago'
    },
    {
      name: 'FvturaNetworkLive',
      description: '',
      isPublic: false,
      language: 'TypeScript',
      updatedAt: 'Updated on Sep 25'
    },
    {
      name: 'AskAway',
      description: '',
      isPublic: false,
      language: 'TypeScript',
      updatedAt: 'Updated on Feb 13'
    }
  ]

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
          {
            repos.map((repo, index) => (
              <div key={index} className='border-b border-[#30363d] pb-4'>
                <div className='flex justify-between items-start'>
                  <div>
                    <h3 className='text-[#58a6ff] text-xl font-semibold hover:underline flex items-center'>
                      {repo.name}
                      <div>
                        <span className='border border-[#30363d] py-[2px] px-1 rounded-full text-[8px] text-[#9198A1] ml-2'>
                          {repo.isPublic ? 'Public' : 'Private'}
                        </span>
                      </div>
                    </h3>
                    <p className='text-sm text-[#8b949e]'>{repo.description}</p>
                    <div className='flex items-center space-x-4 mt-2 text-xs text-[#8b949e]'>
                      {
                        repo.language && (
                          <span className='flex items-center'>
                            <span className='w-3 h-3 rounded-full bg-[#3178c6] mr-1'></span>
                            { repo.language }
                          </span>
                        )
                      }

                      {
                        repo.stars && (
                          <span className='flex items-center'>
                            <Star className='w-4 h-4 mr-1' />
                            { repo.stars }
                          </span>
                        )
                      }
                      <span>{ repo.updatedAt }</span>
                    </div>
                  </div>

                  <div>
                    <button className='bg-[#21262d] border border-[#30363d] rounded-md px-3 py-1 text-xs font-semibold text-[#c9d1d9] hover:bg-[#30363d] flex items-center'>
                      <Star className='w-4 h-4 mr-1' />
                      Star
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <Pagination />
      </section>
    </>
  )
}

export default Body