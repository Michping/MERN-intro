import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Error';

const Error = () => {
  const error = useRouteError();
  
  if(error.status == 404) {
    return(
      <Wrapper>
        <div>
          <h1>ERROR 404! Fant ikke siden</h1>
          <p>Vi finner ikke siden du ser etter</p>
          <Link to="/dashboard">Tilbake hjem</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>Noe gikk galt</h3>
      </div>
    </Wrapper>
  )
}

export default Error