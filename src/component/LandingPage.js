
import LandingPageCard from './LandingPageCard';
import LandingNewsCard from './LandingNewsCard';

import React from 'react'

export default function LandingPage() {
  return (
    <>
      <LandingPageCard/>
      <LandingNewsCard category = {"business"}/>
      <LandingNewsCard category = {"technology"}/>
      <LandingNewsCard category = {"entertainment"}/>
      <LandingNewsCard category = {"health"}/>
      <LandingNewsCard category = {"science"}/>
      <LandingNewsCard category = {"sports"}/>
      <LandingNewsCard category = {"general"}/>
    </>
  )
}
