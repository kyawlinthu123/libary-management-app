import React from 'react'

export default function Error() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-3xl font-semibold mb-4 text-red-500">Error</h1>
        <p className="text-gray-700">
          We apologize for the inconvenience. An unexpected error occurred.
          Please try again later.
        </p>
        <button
          className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          onClick={() => window.location.reload()}
        >
          Reload Page
        </button>
      </div>
    </div>
  )
}
