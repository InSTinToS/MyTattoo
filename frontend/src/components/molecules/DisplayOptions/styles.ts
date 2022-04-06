import styled from 'styled-components'

const DisplayOptionsStyle = styled.ul`
  display: flex;
  align-items: center;

  li + li {
    margin-left: 8px;
  }

  .feedOrientation {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    .feedOrientation {
      display: block;
    }
  }
`

export { DisplayOptionsStyle }
