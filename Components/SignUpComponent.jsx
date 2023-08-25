'use client'

import React, { useState } from 'react'

const SignUpComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    const validationErrors = {}
    if (!formData.firstName) {
      validationErrors.firstName = 'First name is required'
    }
    if (!formData.lastName) {
      validationErrors.lastName = 'Last name is required'
    }
    if (!formData.mobileNumber) {
      validationErrors.mobileNumber = 'Mobile number is required'
    }
    if (!formData.email) {
      validationErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email format'
    }
    if (!formData.password) {
      validationErrors.password = 'Password is required'
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      // Submit the form or perform other actions
      console.log('Form submitted:', formData)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`mt-1 p-2 w-full border ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              } rounded`}
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={`mt-1 p-2 w-full border ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              } rounded`}
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block font-medium">
              Mobile Number
            </label>
            <input
              type="number"
              id="mobileNumber"
              name="mobileNumber"
              className={`mt-1 p-2 w-full border ${
                errors.mobileNumber ? 'border-red-500' : 'border-gray-300'
              } rounded`}
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            {errors.mobileNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`mt-1 p-2 w-full border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`mt-1 p-2 w-full border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } rounded`}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUpComponent
