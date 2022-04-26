import styled from 'styled-components'

const SearchStyle = styled.form`
  display: flex;
  align-items: center;

  width: 100%;

  height: 40px;
  border-radius: 16px;

  border: solid 1px ${({ theme }) => theme.colors.secondary};

  .Search {
    margin-left: 16px;
    width: 20px;
    height: 20px;

    path {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`

export { SearchStyle }
