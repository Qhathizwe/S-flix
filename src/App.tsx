
import Hero  from './components/Hero/Hero'
import LatestRelease from './components/main/latestRelease/latestRelease'
import './App.css'
import TopTrending from './components/main/TopTrending/TopTrending'
import { SelectGenre } from './components/main/SelectGenre/SelectGenre'
import Footer from './components/footer/Footer'


export default function App() {
  return (
    <>
    <div>
      <Hero />
    </div>  
    <LatestRelease />
    <TopTrending />
    <SelectGenre />
    <Footer />
    </> 
    )
}
