import { useCreatePost } from './logic'
import { AddButton, CreatePostStyle, ShareButton } from './styles'
import type { ICreatePostProps } from './types'

import AddPhoto from 'components/atoms/icons/AddPhoto'
import Plus from 'components/atoms/icons/Plus'

const CreatePost = (props: ICreatePostProps) => {
  const { theme } = useCreatePost()

  return (
    <CreatePostStyle {...props}>
      <textarea />

      <div>
        <AddButton icon={<Plus size={18} color={theme.colors.secondary} />}>
          Adicionar vertentes
        </AddButton>

        <AddButton icon={<AddPhoto size={24} color={theme.colors.secondary} />}>
          Adicionar imagem
        </AddButton>

        <ShareButton type='submit'>Publicar</ShareButton>
      </div>
    </CreatePostStyle>
  )
}

export default CreatePost
