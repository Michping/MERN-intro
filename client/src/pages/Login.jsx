import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterOgLogin'
import { FormRow, Logo } from '../components'

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Logg inn</h4>
        <FormRow type="email" name="email" defaultValue="johnsmith@mail.com" />
        <FormRow type="password" name="password" labelText="passord" defaultValue="passord123" />
        <button type='submit' className='submit-btn'>Logg inn</button>
        <button type='button' className='submit-btn'>Utforsk appen</button>
        <p>
          Har du ikke bruker?
          <Link to="/register" className='login-btn'>
            Registrer
          </Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Login