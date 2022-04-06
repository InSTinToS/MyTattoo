import styled from 'styled-components'

const NavbarStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  min-width: 320px;

  background-color: ${({ theme }) => theme.colors.background};

  > ul {
    display: flex;
    align-items: center;

    width: 100%;
    padding: 16px 24px;

    > li {
      display: flex;
      align-items: center;

      height: 46px;

      :not(:nth-child(2)) {
        flex: 1;
      }

      :nth-child(2) {
        flex: 3;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    > ul {
      > li {
        :nth-child(2) {
          flex: none;
          width: min(100%, 65vh);
        }
      }
    }
  }
`

export { NavbarStyle }
