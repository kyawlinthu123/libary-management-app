import React from 'react'
import IMG from '../assets/img.jpeg'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import Loading from '../pages/Loading'
import Error from '../pages/Error'

export default function BookList() {

  const { data : books , loading , error } = useFetch('http://localhost:3001/books')
  
  if (error){
    return <Error/>
  }

  return (
    <div>
      { loading && <Loading/> }
      { !!books && (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-3'>
        {books.map((b) => (
          <Link to={`/books/${b.id}`} key={b.id}>
            <div className='p-4 border border-1'>
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
            </Link>
        ))}
    </div>
      )}
    </div>
  )
}
