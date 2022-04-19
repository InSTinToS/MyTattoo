import styled from 'styled-components'

const PostsStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  > header {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: clamp(200px, 100% - 16px, 65vh);
  }

  > ul {
    width: clamp(200px, 100% - 16px, 65vh);

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
