import styled from 'styled-components'

const CommentsStyle = styled.div`
  ul {
    margin: 16px 0;

    li + li {
      margin-top: 24px;
    }
  }

  form {
    width: 100%;
    height: 36px;
  }
`

export { CommentsStyle }
