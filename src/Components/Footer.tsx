import React from 'react'

const Footer = () => {
    return (
        <div className='rounded-lg shadow-lg my-20 flex flex-row'>
            <div className='md:w-3/5 bg-gradient-to-r from-black to-purple-900 md:from-black md:via-purple-900 md:to-transparent rounded-lg text-gray-100 p-12 '>
                <div className='md:w-1/2 w-full'>
                    <h3 className='text-xl font-extrabold mb-4'>Subscribe to get our offers first</h3>
                    <p className='mb-4 leading-relaxed'>Want to hear from us when we have new Offers? sign up for our news letetr and we will email you every time we have new sale offer</p>
                </div>
                <div>
                    <input type="email" placeholder='Enter Your Email ' className='p-2 bg-gray-600 text-gray-200  placeholder-gray-400 w-full rounded-xl focus:outline-none' />
                    <button className='bg-red-600 w-full mt-4 p-2 rounded-xl'>Subscribe</button>
                </div>
            </div>
            <div className='md:flex   md:w-2/5 hidden  '>
                <img src="7.jpg" alt="" className='h-96 ' />
            </div>
        </div>

    )
}

export default Footer