import styled from 'styled-components';

const Wrapper = styled.div`
  @media (min-width: 991px) {
    display: none;
  }
  .sidebar-container{
    display: none;
  }
  .show-sidebar{
    display: block;
  }
`

export default Wrapper;