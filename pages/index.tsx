import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className='h-[400vh] w-full relative'>
        <div className='sticky top-0'>
          <div className='relative bg-black'>
            <p className='text-6xl text-white h-[100vh] w-full grid items-center px-28 font-poppins'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, accusantium exercitationem ipsam iusto dignissimos impedit voluptatum iure aut, blanditiis dolorum ducimus, aperiam temporibus dolorem maxime rerum quaerat fugiat sit voluptatem.</p>
          </div>
        </div>
      </div>
      <div className='gradient-background absolute mix-blend-darken top-0 h-[400vh] w-full' />
    </div>
  )
}

export default Home
