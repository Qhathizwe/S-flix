import React from 'react'
import Hero  from './components/Hero/Hero'
import LatestRelease from './components/main/latestRelease/LatestRelease'
import './App.css'
import TopTrending from './components/main/TopTrending/TopTrending'
import { SelectGenre } from './components/main/SelectGenre/SelectGenre'


export default function App() {
  return (
    <>
    <div>
      <Hero />
    </div>  
    <LatestRelease />
    <TopTrending />
    <SelectGenre />
    </> 
    )
}
