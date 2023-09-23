import React from 'react'
import Wrapper from '../assets/wrappers/Landing'
import { Link } from 'react-router-dom'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container">
        <h1>
          Jobb <span>tracking</span> app
        </h1>
        <p>
          Yourself off its pleasant ecstatic now law. Ye their mirth seems of songs. Prospect out bed contempt separate. Her inquietude our shy yet sentiments collecting. Cottage fat beloved himself arrived old. Grave widow hours among him no you led. Power had these met least nor young. Yet match drift wrong his our.
        </p>
        <Link to="/register" className='register-btn'>Registrer</Link>
        <br /> <br />
        <Link to="/login" className='login-btn'>Logg inn / Demo bruker</Link>
      </div>
    </Wrapper>
  )
}

export default Landing