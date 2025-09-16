import { Button } from '@/components/ui/button'
import React from 'react'

function FutureOfDelivery() {
    return (
        <div className='container overflow-hidden'>
            <h2 className="text-4xl md:text-7xl mt-10 mx-auto text-center font-bold">
                THE FUTURE OF <span className='text-primary'>DELIVERY</span>
            </h2>

            <div className='flex flex-col justify-center max-w-4xl items-center my-10 mt-20 gap-6 mx-auto'>


                <div className='flex flex-col-reverse md:flex-row justify-between gap-4'>


                    <div className='bg-[#F7A487] max-md:mt-14 p-5 w-full max-w-[650px] rounded-2xl flex flex-col justify-start items-start'>
                        <img src={'/asset/future1.png'} className='self-start  -ms-24 -mt-20' />
                        <div className='p-2 mt-auto'>
                            <p className='text-4xl font-black'>Mission</p>
                            <p className='max-w-[250px] text-lg'>Helping travellers earn and helping people receive, all through one app.</p>
                        </div>
                    </div>


                    <div className='relative bg-[#F46035] pt-36 p-5 max-w-[650px] w-full rounded-2xl flex flex-col justify-start items-start'>
                        <img src={'/asset/future2.png'} className=' absolute -top-[20%]  -right-[14%] md:-right-[15%] w-[80%]' />
                        <div className='p-2'>
                            <p className='text-4xl font-black text-white'>Secure<br />Journey</p>

                            <div>
                                <p className='text-lg text-[#ECECEC] font-semibold'>Verified Travellers</p>
                                <p className='text-base text-[#ECECEC]'>Deliveries carried by verified hands.</p>
                                <hr className='bg-white opacity-30' />
                            </div>
                            <div>
                                <p className='mt-2 text-lg text-[#ECECEC] font-semibold'>Secure Payments</p>
                                <p className='text-base text-[#ECECEC]'>Pay with trust, receive with ease.</p>
                                <hr className='bg-white opacity-30' />
                            </div>
                            <div>
                                <p className='mt-2 text-lg text-[#ECECEC] font-semibold'>Realtime Monitoring</p>
                                <p className='text-base text-[#ECECEC]'>Track your delivery real time through the app</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='bg-secondary p-10 py-20 w-full rounded-2xl flex overflow-hidden relative'>
                   <div className='flex flex-col'>
                     <p className='text-2xl font-bold text-white mt-10 max-md:max-w-[300px]'>Be a part of our launch and get
                        <br />
                        <span className='text-primary'>
                            10% off on your first 5 deliveries
                        </span>
                    </p>

                    <form className='flex flex-col md:flex-row max-md:gap-2 my-10 justify-start items-center'>
                        <input type="text" placeholder='Submit email' className='max-md:w-full bg-[#ffffff5e] text-white placeholder:text-white p-2 px-6 rounded-md mr-2 border-2'/>
                        <Button type='submit' className='py-5 max-md:w-full'>CARRYY YO</Button>
                    </form>
                   </div>

                    <img src="/asset/shape1.png" alt="shape" className='md:max-w-[300px] w-[150px]  absolute -right-10 -bottom-10'/>

                </div>
            </div>
        </div>
    )
}

export default FutureOfDelivery