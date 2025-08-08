import React from 'react'
import Myorders from './Myorders'

const Profile = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <div className='flex-grow container mx-auto p-4 md:p-6'>
            <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 '>
                {/* left <section></section> */}
                <div className='w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6'>
                    <h1 className='font-semibold text-2xl mb-4 md:text-3xl'>John Doe</h1>
                    <p>John@gmail.com</p>
                    <button className='bg-red-500 text-white w-full p-y-2 px-4 rounded  hover:bg-red-600'>LogOut</button>
                </div>

                {/* right section  */}
                <div className='w-full md:h-2/3 lg:3/4'>
                <Myorders/>

                </div>
            </div>


        </div>
    </div>
  )
}

export default Profile