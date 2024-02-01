import React from 'react'
import IMG from '../assets/img.jpeg'

export default function BookList() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-3'>
        {[1,2,3,4,5].map(() => (
            <div className='p-4 border border-1'>
                <img src={IMG} alt="book cover" />
                <div className='text-center space-y-2 mt-3'>
                    <h1 className='font-bold'> The Three Musketeers </h1>
                    <p> Lorem ipsum dolor sit </p>
                    {/* genres  */}
                    <div className='flex flex-wrap'>
                    {['Novel', 'Historical Novel', 'Adventure'].map( genre => (
                    <span className='mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500'> {genre} </span>))}
                    </div>
                </div>  
            </div>
        ))}
    </div>
  )
}
