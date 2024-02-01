import React from 'react'

export default function HeroSection() {
  return (
    // hero section 
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black h-48 flex justify-center items-center">
      <div className="text-center space-y-2">
      <h1 className="text-white text-3xl"> Welcome from <span className="text-primary"> BookStore </span></h1>
      <p className="text-white text-sm"> A place where you can store & manage your books</p>
      </div>
    </div>
  )
}
