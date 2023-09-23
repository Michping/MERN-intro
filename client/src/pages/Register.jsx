import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterOgLogin'
import { FormRow, Logo } from '../components'

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Registrer</h4>
        <FormRow type="text" name="name" labelText="navn" defaultValue="john" />
        <FormRow type="text" name="lastName" labelText="etternavn" defaultValue="smith" />
        <FormRow type="text" name="location" labelText="sted" defaultValue="norge" />
        <FormRow type="text" name="email" defaultValue="johnsmith@mail.com" />
        <FormRow type="password" name="password" labelText="passord" defaultValue="passord123" />
        <button type='submit' className='submit-btn'>
          registrer
        </button>
        <p>
          Allerede medlem?
          <Link to="/login" className='login-btn'>
            Logg inn
          </Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register