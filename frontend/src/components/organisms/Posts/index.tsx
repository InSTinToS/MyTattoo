import { usePosts } from './logic'
import { PostsStyle } from './styles'

import CreatePost from '../CreatePost'
import Post from '../Post'

const Posts = () => {
  const { formattedPosts } = usePosts()

  return (
    <PostsStyle>
      <CreatePost forwardedAs='header' />

      <ul>
        {formattedPosts.map(({ headerData, id }) => (
          <li key={id}>
            <Post postHeader={headerData} forwardedAs='section' />
          </li>
        ))}
      </ul>
    </PostsStyle>
  )
}

export default Posts
