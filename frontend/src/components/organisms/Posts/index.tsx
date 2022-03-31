import { PostsStyle } from './styles'

import Post from '../Post'

import avatar2 from '@public/avatar2.jpg'

const fakePosts = [
  {
    id: '2',
    name: 'Vitor Daniel',
    isArtist: true,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dolor, eos possimus sint, quam aliquam veniam obcaecati, eius libero numquam perspiciatis dolorem! Sed, adipisci odio minima odit dolorum libero vero.',
    avatar: avatar2
  },
  {
    id: '2',
    name: 'Vitor Daniel',
    isArtist: true,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dolor, eos possimus sint, quam aliquam veniam obcaecati, eius libero numquam perspiciatis dolorem! Sed, adipisci odio minima odit dolorum libero vero.',
    avatar: avatar2
  }
]

const Posts = () => (
  <PostsStyle>
    <ul>
      {fakePosts.map(({ avatar, description, name, id, isArtist }) => (
        <li key={id}>
          <Post postHeader={{ name, avatar, isArtist, description }} />
        </li>
      ))}
    </ul>
  </PostsStyle>
)

export default Posts
