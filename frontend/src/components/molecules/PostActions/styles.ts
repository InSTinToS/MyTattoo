import styled from 'styled-components'

const PostActionsStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  padding: 0 8px;
  margin: 16px 0;

  > li + li {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 16px;
  }
`

export { PostActionsStyle }
