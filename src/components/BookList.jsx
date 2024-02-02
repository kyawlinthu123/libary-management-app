import React from 'react'
import IMG from '../assets/img.jpeg'
import useFetch from '../hooks/useFetch'

export default function BookList() {

  const { data : books , loading , error } = useFetch('http://localhost:3001/books')
  
  if (error){
    return <p>{error}</p>
  }

  return (
    <div>
      { loading && <p> Loading contents ... </p>}
      { !!books && (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-3'>
        {books.map((b) => (
            <div className='p-4 border border-1' key={b.id}>
                <img src={IMG} alt="book cover" />
                <div className='text-center space-y-2 mt-3'>
                    <h1 className='font-bold'> {b.title} </h1>
                    <p> {b.description} </p>
                    {/* genres  */}
                    <div className='flex flex-wrap'>
                    {b.categories.map( category => (
                    <span key={category} className='mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500'> {category} </span>))}
                    </div>
                </div>  
            </div>
        ))}
    </div>
      )}
    </div>
  )
}
