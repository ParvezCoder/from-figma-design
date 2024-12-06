import React from 'react'

const FooterFinal = () => {
    return (
        <div className='border-t-2 border-red-300 flex flex-col sm:flex-row text-center sm:justify-between text-sm '>
            <div className='mb-4 space-x-4'>
                <a href="">About</a>
                <a href="">Privacy Policy</a>
                <a href="">Terms Of services</a>
            </div>
            <p>&copy; Copyright Reserved Parvez Ahmed</p>
        </div>

    )
}

export default FooterFinal