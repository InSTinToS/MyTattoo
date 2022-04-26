import { IIconProps } from '../../types'
import type { IIconStyleProps } from '../../types'

interface IArtistHeartProps extends IArtistHeartStyleProps, IIconProps {}

interface IArtistHeartStyleProps extends IIconStyleProps {
  heartColor?: string
}

export type { IArtistHeartStyleProps, IArtistHeartProps }
