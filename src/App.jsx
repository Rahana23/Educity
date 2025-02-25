import {React, useState} from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonials from './Component/Testimonials/Testimonials'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Video from './Component/Video/Video'

const App = () => {

  const [showVideo, setShowVideo] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='OUR PROGRAMS' title='What We Offer' />
      <Programs />
      <About setShowVideo={setShowVideo} />
      <Title subtitle='Gallery' title='Campus Photos' />
      <Campus />
      <Title subtitle='Testimonials' title='What Our Students Say' />
      <Testimonials />
      <Title subtitle='Contact Us' title='Get In Touch' />
      <Contact />
      <Footer />
      <Video showVideo={showVideo} setShowVideo={setShowVideo} />
      </div>
    </div>
  )
}

export default App