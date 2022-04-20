import { ImageProps } from 'next/image'

interface IAvatarStyleProps extends ImageProps {}

interface IAvatarProps extends IAvatarStyleProps {
  size: number
}

export type { IAvatarProps, IAvatarStyleProps }
