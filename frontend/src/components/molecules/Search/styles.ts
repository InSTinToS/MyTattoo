import styled from 'styled-components'

const SearchStyle = styled.div`
  display: flex;

  height: 40px;
  padding: 8px;
  border-radius: 16px;
  width: 100%;

  border: solid 1px ${({ theme }) => theme.colors.secondary};

  form {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1080px) {
    width: clamp(304px, 100% - 16px, 65vh);
  }
`

export { SearchStyle }
