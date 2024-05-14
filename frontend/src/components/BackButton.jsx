/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowBarLeft } from 'react-icons/bs'

const BackButton = ({ destination = '/'}) =>  {
  return (
    <div className="flex">
        <Link to={destination} className='bg-sky-800 text-white px-4 rounded-lg w-fit'>
            <BsArrowBarLeft className='text-2xl'/>
        </Link>
    </div>
  )
}

export default BackButton;