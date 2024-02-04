import React from 'react'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-gray-700 text-lg mb-4">Page not found</p>
        <p className="text-gray-500">The page you are looking for might be under construction or does not exist.</p>
        <button
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={() => window.location.href = '/'}
        >
          Go to Home
        </button>
      </div>
    </div>
  )
}
