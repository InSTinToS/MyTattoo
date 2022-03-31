import type { IIconStyleProps } from '../types'

interface IArtistHeartProps extends IArtistHeartStyleProps {}

interface IArtistHeartStyleProps extends IIconStyleProps {
  heartColor?: string
}

export type { IArtistHeartStyleProps, IArtistHeartProps }
