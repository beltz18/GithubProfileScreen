import React from 'react'
import Image from 'next/image'
import { getUserData } from '@lib/ServerActions'
import UserData from '@com/UserData'

const Aside = async () => {
  const data = await getUserData('beltz18')

  return (
    <>
      <aside className='w-full md:w-1/4 flex flex-col'>
        <div className='flex items-center justify-center mb-4'>
          <Image
            src='/andi.jpg'
            alt='Profile picture'
            width={ 250 }
            height={ 250 }
            className='rounded-full'
          />
        </div>

        <UserData userData={ data.data } />
      </aside>
    </>
  )
}

export default Aside