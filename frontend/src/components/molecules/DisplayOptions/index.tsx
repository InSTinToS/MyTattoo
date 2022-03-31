import { useDisplayOptions } from './logic'
import { DisplayOptionsStyle } from './styles'

import DisplayHorizontal from 'components/atoms/icons/DisplayHorizontal/DisplayHorizontal'
import DisplayVertical from 'components/atoms/icons/DisplayVertical/DisplayVertical'

const DisplayOptions = () => {
  const { onLiClick, horizontalColor, verticalColor } = useDisplayOptions()

  return (
    <DisplayOptionsStyle>
      <li onClick={() => onLiClick('horizontal')}>
        <DisplayHorizontal size={29} color={horizontalColor} />
      </li>

      <li onClick={() => onLiClick('vertical')}>
        <DisplayVertical size={29} color={verticalColor} />
      </li>
    </DisplayOptionsStyle>
  )
}

export default DisplayOptions
