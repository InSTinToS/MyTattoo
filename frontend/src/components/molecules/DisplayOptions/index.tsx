import { useDisplayOptions } from './logic'
import {
  DisplayHorizontal,
  DisplayOptionsStyle,
  DisplayVertical
} from './styles'

import DisabledFilter from 'components/atoms/Icon/icons/DisabledFilter'
import Filter from 'components/atoms/Icon/icons/Filter'

const DisplayOptions = () => {
  const {
    onLiClick,
    horizontalColor,
    verticalColor,
    showLeftSide,
    toggleShowLeftSide
  } = useDisplayOptions()

  return (
    <DisplayOptionsStyle>
      <li className='feedOrientation' onClick={() => onLiClick('horizontal')}>
        <DisplayHorizontal color={horizontalColor} />
      </li>

      <li className='feedOrientation' onClick={() => onLiClick('vertical')}>
        <DisplayVertical color={verticalColor} />
      </li>

      <li>
        {showLeftSide ? (
          <DisabledFilter onClick={toggleShowLeftSide} />
        ) : (
          <Filter onClick={toggleShowLeftSide} />
        )}
      </li>
    </DisplayOptionsStyle>
  )
}

export default DisplayOptions
