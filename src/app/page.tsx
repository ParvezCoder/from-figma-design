import Body from '@/app/Components/Body'
import Footer from '@/app/Components/Footer'
import FooterFinal from '@/app/Components/FooterFinal'
import Navbar from '@/app/Components/Navbar'
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