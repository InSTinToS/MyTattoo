import styled from 'styled-components'

const PostsStyle = styled.section`
  > header {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  > ul {
    > li {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      margin-top: 24px;
    }
  }
`

export { PostsStyle }
