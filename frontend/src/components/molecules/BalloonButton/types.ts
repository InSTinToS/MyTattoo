import { ButtonHTMLAttributes } from 'react'

interface IBalloonButtonStyleProps {}

interface IBalloonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined: boolean
}

export type { IBalloonButtonProps, IBalloonButtonStyleProps }
