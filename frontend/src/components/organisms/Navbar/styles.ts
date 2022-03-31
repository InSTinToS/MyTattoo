import styled from 'styled-components'

const NavbarStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: ${({ theme }) => theme.colors.background};

  > ul {
    display: flex;
    align-items: center;

    width: 100%;
    padding: 16px 24px;

    > li:first-child,
    > li:last-child {
      flex: 1;
    }

    > li:nth-child(2) {
      width: 500px;
    }
  }
`

export { NavbarStyle }
