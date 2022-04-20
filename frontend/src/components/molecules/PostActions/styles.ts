import styled from 'styled-components'

const PostActionsStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  height: 40px;
  padding: 4px;
  margin: 16px 0;
  overflow: hidden;

  > li {
    padding: 4px;

    & + li {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export { PostActionsStyle }
