interface ICommentStyleProps {
  isArtist: boolean
}

interface ICommentProps extends ICommentStyleProps {
  name: string
  avatar: string
  content: string
}

export type { ICommentProps, ICommentStyleProps }
