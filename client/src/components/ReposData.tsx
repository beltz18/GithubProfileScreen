'use client'

import React, { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { ReposT } from '@typ/Repo'

const ReposData = ({ reposData }: { reposData: ReposT }) => {
  const [repos, setRepos] = useState<ReposT>([])
  const [lding, setLding] = useState<boolean>(true)

  useEffect(() => {
    setRepos(reposData)
    setLding(false)
  }, [reposData])

  return (
    <>
      {
        lding && repos.length == 0 && (
          <div className='w-full h-[80vh] flex items-center justify-center'>
            <span className='text-center'>Loading...</span>
          </div>
        )
      }

      {
        repos.map((repo, index) => (
          <div key={index} className='border-b border-[#30363d] pb-4'>
            <div className='flex justify-between items-start'>
              <div>
                <h3 className='text-[#58a6ff] capitalize text-xl font-semibold flex items-center'>
                  { repo.name }
                  <div>
                    <span className='border border-[#30363d] py-[2px] px-1 rounded-full text-[8px] text-[#9198A1] ml-2'>
                      { repo.visibility ? 'Public' : 'Private' }
                    </span>
                  </div>
                </h3>

                <p className='text-sm text-[#8b949e] capitalize'>
                  { repo.description }
                </p>

                <div className='flex items-center space-x-4 mt-2 text-xs text-[#8b949e]'>
                  {
                    repo.language && (
                      <span className='flex items-center capitalize'>
                        <span className='w-3 h-3 rounded-full bg-[#3178c6] mr-1' />
                        { repo.language }
                      </span>
                    )
                  }

                  {
                    repo.stars > 0 && (
                      <span className='flex items-center'>
                        <Star className='w-4 h-4 mr-1' />
                        { repo.stars }
                      </span>
                    )
                  }

                  <span>
                    Updated &nbsp;
                    { repo.update }
                  </span>
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
    </>
  )
}

export default ReposData