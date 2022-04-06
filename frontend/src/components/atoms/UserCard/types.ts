import { HTMLAttributes } from 'react'

interface IUserCardStyleProps {}

interface IUserCardProps
  extends IUserCardStyleProps,
    HTMLAttributes<HTMLDivElement> {
  name: string
  avatar: string
  smallBio: string
}

export type { IUserCardProps, IUserCardStyleProps }
