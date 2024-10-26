import React  from 'react'
import Header from '@sec/Header'
import Aside  from '@sec/Aside'
import Body   from '@sec/Body'

const Home = () => {
  return (
    <>
      <div className='min-h-screen bg-[#0d1117] text-[#c9d1d9]'>
        <Header />

        <main className='max-w-[1280px] mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row gap-6'>
            <Aside />
            <Body />
          </div>
        </main>
      </div>
    </>
  )
}

export default Home