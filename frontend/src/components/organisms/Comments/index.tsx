import { Container } from './styles'
import React from 'react'

import Input from 'components/atoms/Input'

import Comment from 'components/molecules/Comment'

import avatar2 from '@public/avatar2.jpg'
import avatar from '@public/avatar.png'

import { useFormik } from 'formik'

const fakeComments = [
  {
    id: '1',
    name: 'Miguel Andrade',
    avatar,
    isArtist: false,
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicingelit. Ipsam minus consequatur sit iste odit itaque accusamus. Blanditiisperferendis natus, eveniet est, architecto numquam accusamus, iste sitquidem enim atque ad?'
  },
  {
    id: '2',
    name: 'Vitor Daniel',
    avatar: avatar2,
    isArtist: true,
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus harum nesciunt provident accusantium ullam, sint, quisquam in corporis dolorum soluta eum mollitia architecto ex vel perferendis, consequuntur ipsam aperiam delectus.'
  }
]

const Comments = () => {
  const formik = useFormik({
    initialValues: { newComment: '' },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <Container>
      <ul>
        {fakeComments.map(({ name, content, id, avatar, isArtist }) => (
          <li key={id}>
            <Comment
              name={name}
              avatar={avatar}
              content={content}
              isArtist={isArtist}
            />
          </li>
        ))}
      </ul>

      <form onSubmit={formik.handleSubmit}>
        <Input
          outlined
          type='text'
          name='newComment'
          placeholder='Deixe um comentário!'
        />
      </form>
    </Container>
  )
}

export default Comments
