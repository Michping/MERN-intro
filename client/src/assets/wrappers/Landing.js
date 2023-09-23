import styled from 'styled-components';

const Wrapper = styled.div`
  span{
    color: dodgerblue;
  }
  p{
    max-width: 300px;
    word-wrap: break-word;
  }
  .register-btn{
    background: dodgerblue;
    text-decoration: none;
    color: white;
    font-size: 35px;
    padding: 7px;
    border-radius: 10px;
    border: 2px solid black;
  }
  .login-btn{
    background: dodgerblue;
    text-decoration: none;
    color: white;
    font-size: 25px;
    padding: 7px;
    border-radius: 10px;
    border: 2px solid black;
  }
`

export default Wrapper;