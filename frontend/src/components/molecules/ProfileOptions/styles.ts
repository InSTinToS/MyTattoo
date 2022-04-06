import styled from 'styled-components'

const ProfileOptionsStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;

  li {
    :not(:last-child) {
      display: none;
    }

    img {
      border-radius: 50%;
    }
  }

  @media screen and (min-width: 1024px) {
    li {
      &:not(:last-child) {
        display: block;
      }

      & + li {
        margin-left: 16px;
      }
    }
  }
`

export { ProfileOptionsStyle }
