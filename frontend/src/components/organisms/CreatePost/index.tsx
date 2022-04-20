import { AddButton, CreatePostStyle, ShareButton } from './styles'
import type { ICreatePostProps } from './types'

import AddPhoto from 'components/atoms/Icon/icons/AddPhoto'
import Plus from 'components/atoms/Icon/icons/Plus'

const CreatePost = (props: ICreatePostProps) => {
  return (
    <CreatePostStyle {...props}>
      <textarea />

      <div>
        <AddButton icon={<Plus />}>Adicionar vertentes</AddButton>

        <AddButton icon={<AddPhoto />}>Adicionar imagem</AddButton>

        <ShareButton type='submit'>Publicar</ShareButton>
      </div>
    </CreatePostStyle>
  )
}

export default CreatePost
