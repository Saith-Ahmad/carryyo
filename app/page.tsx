import CTASection from '@/componnets/CTAsection'
import Hero from '@/componnets/Hero'
import Safety from '@/componnets/Safety'
import Services from '@/componnets/Services'
import TestimonialsSection from '@/componnets/Testimonials'
import VisionMission from '@/componnets/VisionMission'
import React from 'react'

export default function page() {
  return (
    <div className=''>
      <Hero/>
      <Services/>
      <Safety/>
      <VisionMission/>
      <TestimonialsSection/>
      <CTASection/>
    </div>
  )
}
