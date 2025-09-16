import React from 'react'

function CTAsection() {
  return (
    <div className='p-5'>
      <div className='relative inset-x-0 bg-secondary border-yellow-200 md:min-h-[100vh] min-h-[70vh] w-full rounded-4xl flex flex-col justify-center items-center p-5 '>
        <div className='flex flex-col gap-3'>
          <img src={'/asset/quote.png'} alt='quote' className='self-start' />
          <p className='text-white md:text-5xl text-3xl  max-w-4xl text-center leading-normal'>From spare luggage to shared love. Every journey has space to carry connections</p>
          <img src={'/asset/quote.png'} alt='quote' className='self-end' />
        </div>

         <img src={'/asset/quotebg.png'} alt='quote' className='absolute bottom-0 w-full' />
      </div>
    </div>
  )
}

export default CTAsection