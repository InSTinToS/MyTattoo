import styled from 'styled-components'

const PostsStyle = styled.section`
  > ul {
    > li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    > li + li {
      margin-top: 24px;
    }
  }
`

export { PostsStyle }
