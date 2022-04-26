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
        <button>
          <DisplayHorizontal color={horizontalColor} />
        </button>
      </li>

      <li className='feedOrientation' onClick={() => onLiClick('vertical')}>
        <button>
          <DisplayVertical color={verticalColor} />
        </button>
      </li>

      <li>
        <button
          onClick={() => {
            showLeftSide ? toggleShowLeftSide() : toggleShowLeftSide()
          }}
        >
          {showLeftSide ? (
            <DisabledFilter aria-label='Desabilitar filtro' />
          ) : (
            <Filter aria-label='Habilitar filtro' />
          )}
        </button>
      </li>
    </DisplayOptionsStyle>
  )
}

export default DisplayOptions
