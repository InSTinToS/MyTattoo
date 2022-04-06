import { useDisplayOptions } from './logic'
import { DisplayOptionsStyle } from './styles'

import DisabledFilter from 'components/atoms/icons/DisabledFilter'
import DisplayHorizontal from 'components/atoms/icons/DisplayHorizontal'
import DisplayVertical from 'components/atoms/icons/DisplayVertical'
import Filter from 'components/atoms/icons/Filter'

import { FeedContext } from 'components/templates/Feed/logic'

import { useContext } from 'react'

const DisplayOptions = () => {
  const { showLeftSide, toggleShowLeftSide } = useContext(FeedContext)

  const { onLiClick, horizontalColor, theme, verticalColor } =
    useDisplayOptions()

  return (
    <DisplayOptionsStyle>
      <li className='feedOrientation' onClick={() => onLiClick('horizontal')}>
        <DisplayHorizontal size={29} color={horizontalColor} />
      </li>

      <li className='feedOrientation' onClick={() => onLiClick('vertical')}>
        <DisplayVertical size={29} color={verticalColor} />
      </li>

      <li>
        {showLeftSide ? (
          <DisabledFilter
            size={28}
            color={theme.colors.primary}
            onClick={toggleShowLeftSide}
          />
        ) : (
          <Filter
            size={25}
            color={theme.colors.secondary}
            onClick={toggleShowLeftSide}
          />
        )}
      </li>
    </DisplayOptionsStyle>
  )
}

export default DisplayOptions
