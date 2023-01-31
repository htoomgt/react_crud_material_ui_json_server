import React from 'react'
import notFound from '../assets/images/not_found.jpg'

const NotFound = () => {
  return (
    <img src={notFound} style={{width: '30%', margin: '80px 0 0 35%'}} alt="404 not found" />
  )
}

export default NotFound