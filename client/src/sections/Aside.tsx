import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Users, Building, Pin, Link as L } from 'lucide-react'

const Aside = () => {
  return (
    <>
      <aside className='w-full md:w-1/4 flex flex-col'>
        <div className='flex items-center justify-center mb-4'>
          <Image
            src='/andi.jpg'
            alt='Profile picture'
            width={250}
            height={250}
            className='rounded-full'
          />
        </div>

        <h1 className='text-2xl font-bold mb-1'>Andi Montilla</h1>
        <p className='text-[#8b949e] mb-4'>beltz18</p>
        
        <button className='w-full bg-[#21262d] border border-[#30363d] rounded-md px-3 py-1 mb-4 text-sm font-semibold text-[#c9d1d9] hover:bg-[#30363d]'>
          Follow
        </button>
        
        <p className='mb-4 text-[12px]'>
          Software Engineer Full Stack and Team Lead Manager at TIDV Tech
        </p>

        <div className='w-full text-sm'>
          <span className='flex items-center mb-4 text-[10px]'>
            <Users className='w-3 h-3 mr-1' />
            <span className='mr-2'>12</span> followers &nbsp; | <span className='mx-2'>13</span> following
          </span>

          <span className='flex items-center mb-2'>
            <Building className='w-4 h-4 mr-1' />
            <span className='mr-2'>TIDV Tech</span>
          </span>

          <span className='flex items-center mb-2'>
            <Pin className='w-4 h-4 mr-1' />
            <span className='mr-2 truncate'>Buenos Aires, Argentina</span>
          </span>

          <span className='flex items-center mb-2'>
            <L className='w-4 h-4 mr-1' />
            <Link
              href='https://tidv-tech.vercel.app/AndiDev'
              className='truncate'
            >
              https://tidv-tech.vercel.app/AndiDev
            </Link>
          </span>
        </div>
      </aside>
    </>
  )
}

export default Aside