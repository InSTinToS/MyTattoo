import { useLabel } from './logic'
import { LabelStyle } from './styles'
import type { ILabelProps } from './types'

import Close from '../../atoms/icons/Close'

import Check from 'components/atoms/icons/Check'
import Plus from 'components/atoms/icons/Plus'

const Label = ({ label, icon, colors, stroke }: ILabelProps) => {
  const { theme } = useLabel()

  return (
    <LabelStyle colors={colors} stroke={stroke}>
      {icon === '+' && (
        <Plus className='icon' color={theme.colors.secondary} size={12} />
      )}

      {icon === 'x' && (
        <Close className='icon' color={theme.colors.secondary} size={12} />
      )}

      {icon === 'v' && (
        <Check className='icon' color={theme.colors.secondary} size={12} />
      )}
      <div color=''></div>

      <span>{label}</span>
    </LabelStyle>
  )
}

export default Label
