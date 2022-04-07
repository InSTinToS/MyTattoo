import { usePosts } from './logic'
import { PostsStyle } from './styles'

import CreatePost from '../CreatePost'
import Post from '../Post'

const Posts = () => {
  const { formattedPosts } = usePosts()

  return (
    <PostsStyle>
      <header>
        <CreatePost />
      </header>

      <ul>
        {formattedPosts.map(({ headerData, id }) => (
          <li key={id}>
            <Post postHeader={headerData} />
          </li>
        ))}
      </ul>
    </PostsStyle>
  )
}

export default Posts
