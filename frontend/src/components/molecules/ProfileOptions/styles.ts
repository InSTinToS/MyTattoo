import styled from 'styled-components'

const ProfileOptionsStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  li {
    img {
      border-radius: 50%;
    }

    & + li {
      margin-left: 16px;
    }
  }
`

export { ProfileOptionsStyle }
