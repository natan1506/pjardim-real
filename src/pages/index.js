import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Contact from '../components/Contact'
import Depoiments from '../components/Depoiments'
import Quotation from '../components/Quotation'
import Projects from '../components/Projects'
import { Content } from './styles'
 
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Content>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Carousel />
      <InfoSection {...homeObjOne} />
      <Services />
      <Projects />
      <Depoiments />
      <Quotation />
      <Contact />
      <Footer />
    </Content>
  )
}

export default Home
