import React from 'react'
import HeroSection from '../components/heroSection'
import ArtclsTendance from '../components/artclsTendance'
import Apropos from '../components/apropos'
import MembersSlider from '../components/membersSlider'
import QstFrequentes from '../components/qstFrequentes'

export const Home = () =>  {
  return (
    <div>
    <HeroSection />
    <ArtclsTendance/> 
    <Apropos/> 
     <MembersSlider/> 
    < QstFrequentes /> 
    </div>
  )
}
