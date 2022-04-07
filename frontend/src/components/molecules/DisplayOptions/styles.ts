import styled from 'styled-components'

const DisplayOptionsStyle = styled.ul`
  display: flex;

  width: 100%;

  li + li {
    margin-left: 8px;
  }

  .feedOrientation {
    display: none;
  }

  @media screen and (min-width: 1080px) {
    .feedOrientation {
      display: block;
    }
  }
`

export { DisplayOptionsStyle }
