import Body from '@/Components/Body'
import Footer from '@/Components/Footer'
import FooterFinal from '@/Components/FooterFinal'
import Navbar from '@/Components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className='container   mx-auto p-5'>

        <Navbar />
        <Body/>
        <Footer/>
        <FooterFinal/>
      </div>
    </>
  )
}

export default Home