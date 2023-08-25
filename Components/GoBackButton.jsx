'use client'
import React from 'react'

const GoBackButton = () => {
  const goBack = () => {
    window.history.back()
  }
  return (
    <div className="m-3">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ml-5 px-4 rounded"
        onClick={goBack}
      >
        Go Back
      </button>
    </div>
  )
}

export default GoBackButton
