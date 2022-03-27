import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>This is a Review App</h1>
        <p>Leave your reviews here to make a difference about the product!</p>
        <p><Link to='/'>Go back home</Link></p>
      </div>
    </Card>
  )
}

export default AboutPage