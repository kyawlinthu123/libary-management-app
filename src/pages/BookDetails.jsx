import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import Error from './Error';
import Loading from './Loading';
import BookCover from '../assets/img.jpeg';


export default function BookDetails() {

    let { id } = useParams();
    let { data : book , loading , error } = useFetch(`http://localhost:3001/books/${id}`)

  return (
   <>
   { error && <Error/>}
   { loading && <Loading/>}
   { !!book && (
    <div className='grid grid-cols-2'>
        <div>
            <img src={BookCover} alt="" className=' w-[80%]'/>
        </div>
        <div className=' space-y-4'>
            <h1 className=' text-3xl font-bold'> {book.title} </h1>
            <div className='space-x-3'>
            {book.categories.map( category => (
            <span className='bg-primary text-white rounded-full text-sm px-2 py-1' key={category}> {category} </span>
            ))}
        </div>
        <div>
            <p> {book.description} </p>
        </div>
        </div>
    </div>
   )}
   </>
  )
}
