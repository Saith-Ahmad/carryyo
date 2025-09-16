import CTASection from '@/componnets/CTAsection'
import FutureOfDelivery from '@/componnets/FutureOfDelivery'
import Hero from '@/componnets/Hero'
import HeroMob from '@/componnets/HeroMob'
import MovingForward from '@/componnets/MovingForward'
import CaseStudies from '@/componnets/Slider'
import { Sliders } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className=''>
      <div className='hidden md:flex'><Hero/></div>
      <div className='flex md:hidden'><HeroMob/></div>
      <CaseStudies/>
      <CTASection/>
      <MovingForward/>
      <FutureOfDelivery/>
    </div>
  )
}
