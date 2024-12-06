import React from 'react'

const Cart = () => {
    return (
        <div className='shadow-lg rounded-lg'>
            <a href="">
                <img src="/1.jpg"  className='rounded-tl-lg object-top rounded-tr-lg h-60 w-full  object-cover  ' />
            </a>
            <div className='p-2'>
                <a href=""><h2>Online Shop</h2> </a>
                <div className='flex my-3'>
                    <div className='bg-black h-5 w-5 rounded-full shadow-md mr-2'></div>
                    <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                    <div className='bg-white h-5 w-5 rounded-full shadow-md mr-2'></div>
                    <div className='bg-red-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
                    <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
                </div>
                <div className='flex my-3'>
                    <div className='border-2 px-2 py-1 mr-2 border-gray-300 text-gray-400 rounded-md text-xs '>XXL</div>
                    <div className='border-2 px-2 py-1 mr-2 border-gray-300 text-gray-400 rounded-md text-xs '>XL</div>
                    <div className='border-2 px-2 py-1 mr-2 border-gray-300 text-gray-400 rounded-md text-xs '>L</div>
                    <div className='border-2 px-2 py-1 mr-2 border-gray-300 text-gray-400 rounded-md text-xs '>M</div>
                    <div className='border-2 px-2 py-1 mr-2 border-gray-300 text-gray-400 rounded-md text-xs '>S</div>
                    <div className='border-2 px-2 py-1 mr-2 border-gray-300 text-gray-400 rounded-md text-xs '>XS</div>
                </div>
                <div className='flex flex-col text-center  xl:flex-row justify-between text-sm'>
                    <a href="" className='bg-gradient-to-r  from-red-700 to-red-600 my-3 justify-center hover:from-pink-600 hover:to-pink-600 py-1 text-gray-50 px-3 flex-row rounded-full' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-5 inline-block mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        Add to cart</a>
                    <a href="" className='bg-purple-600 hover:bg-purple-800 flex my-3 justify-center hover:from-pink-600 hover:to-pink-600 py-1 text-gray-50 px-3 flex-row rounded-full' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5  mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                        View Detail</a>

                </div>
            </div>
        </div>
    )
}

export default Cart