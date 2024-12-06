import React from 'react'
const Navbar = () => {
    const navData = ["Home", "Shop", "Blog", "Contact"]
    return (
        <div className='md:flex justify-center md:justify-between flex-col md:flex-row text-center'>
            <div className='flex  flex-row justify-center'>
                <div className='bg-gradient-to-r from-purple-400 to-red-400 w-9 h-9 rounded'></div>
                <h2 className='text-3xl text-gray-600 ml-3'>logo</h2>
            </div>

            <div className='mt-3 ' >
                {navData.map((items) => {
                    console.log(items)
                    return (
                        <a href="" className='text-gray-600 hover:text-purple-600 p-4'> {items}</a>
                    )
                })}
                <a href="" className='text-gray-50 hover:bg-purple-800 bg-purple-600  px-3 py-2 rounded-full '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-5 mr-2 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    Cart</a>
            </div>
            {/* /////////////////////////////// Navbar end /////////////////////////////// */ }
        </div>
           
    )
}

export default Navbar