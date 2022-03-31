import styled from 'styled-components'

const PostsStyle = styled.section`
  flex: 2;

  > ul {
    > li + li {
      margin-top: 24px;
    }
  }
`

export { PostsStyle }
