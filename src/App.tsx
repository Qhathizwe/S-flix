
import Hero  from './components/Hero/Hero'
import  './App.css'
import Footer from './components/footer/Footer'
import { MainContent } from './components/main/MainContent'



export default function App() {
  return (
    <>
    <div className="app-container">
    <Hero />
    <MainContent />
    <Footer />
    </div>
    </> 
    )
}
