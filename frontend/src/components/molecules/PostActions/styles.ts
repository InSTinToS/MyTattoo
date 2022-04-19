import styled from 'styled-components'

const PostActionsStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-height: 40px;
  overflow: hidden;

  width: 100%;
  padding: 4px;
  margin: 16px 0;

  > li {
    padding: 4px;
  }

  > li + li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export { PostActionsStyle }
