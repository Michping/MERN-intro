import logo from '../assets/images/logo.png'
import styled from 'styled-components'

const Wrapper = styled.div`
  .logo{
    width: 100px;
  }
`

const Logo = () => {
  return (
    <Wrapper>
      <img src={logo} alt="ungkoding logo" className='logo' />
    </Wrapper>
  )
}

export default Logo;