'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { exampleData } from '@lib/utils'
import { UserT } from '@typ/User'
import { Users, Building, Pin, Link as L } from 'lucide-react'

const UserData = ({ userData }: { userData: UserT }) => {
  const [data, setData] = useState<UserT>(exampleData)
  const [load, setLoad] = useState<boolean>(true)

  useEffect(() => {
    if (userData?.name != 'loading...') {
      setData(userData)
      setLoad(false)
    }
  }, [userData])

  return (
    <div className='capitalize'>
      <h1 className='text-2xl font-bold mb-1'>{ data.name }</h1>
      <p className='text-[#8b949e] mb-4'>{ data.username }</p>

      <button
        className='w-full bg-[#21262d] border border-[#30363d] rounded-md px-3 py-1 mb-4 text-sm font-semibold text-[#c9d1d9] hover:bg-[#30363d]'
        disabled={ load }
      >
        Follow
      </button>

      <p className='mb-4 text-[12px]'>
        { data.description }
      </p>

      <div className='w-full text-sm'>
        <span className='flex items-center mb-4 text-[10px]'>
          <Users className='w-3 h-3 mr-1' />
          <span className='mr-2'>{ data.followers }</span> followers &nbsp; |
          <span className='mx-2'>{ data.following }</span> following
        </span>

        <span className='flex items-center mb-2'>
          <Building className='w-4 h-4 mr-1' />
          <span className='mr-2'>{ data.company }</span>
        </span>

        <span className='flex items-center mb-2'>
          <Pin className='w-4 h-4 mr-1' />
          <span className='mr-2 truncate'>{ data.location }</span>
        </span>

        <span className='flex items-center mb-2'>
          <L className='w-4 h-4 mr-1' />
          <Link
            href={ data.url }
            className='truncate'
          >
            { data.url == '/' ? 'Loading...' : data.url }
          </Link>
        </span>
      </div>
    </div>
  )
}

export default UserData