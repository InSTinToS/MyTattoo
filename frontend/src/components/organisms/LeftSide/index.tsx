import { useLeftSide } from './logic'
import { LeftSideStyle } from './styles'
import type { ILeftSideProps } from './types'

import DropArrow from 'components/atoms/DropArrow'
import Check from 'components/atoms/Icon/icons/Check'
import Close from 'components/atoms/Icon/icons/Close'
import Plus from 'components/atoms/Icon/icons/Plus'
import Search from 'components/atoms/Icon/icons/Search'
import Input from 'components/atoms/Input'

import Button from 'components/molecules/Button'

const LeftSide = (props: ILeftSideProps) => {
  const {
    filters,
    onArrowClick,
    onFilterClick,
    showUnsignedsFilters,
    notAddedFiltersAnimation
  } = useLeftSide()

  return (
    <LeftSideStyle {...props}>
      <section>
        <header>
          <form>
            <Search />

            <Input name='filter' placeholder='Procure por filtros' />
          </form>

          <DropArrow onClick={onArrowClick} condition={showUnsignedsFilters} />
        </header>

        <div style={notAddedFiltersAnimation}>
          <ul>
            {filters?.unsigned?.map(({ id, name }) => (
              <li key={id}>
                <Button
                  icon={<Plus />}
                  onClick={() => {
                    onFilterClick({ id, name }, 'add')
                  }}
                >
                  {name}
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <footer>
          <ul>
            {filters?.removed?.map(({ id, name }) => (
              <li key={id}>
                <Button
                  className='close'
                  icon={<Close />}
                  onClick={() => {
                    onFilterClick({ id, name }, 'unsign')
                  }}
                >
                  {name}
                </Button>
              </li>
            ))}
          </ul>

          <ul>
            {filters?.added?.map(({ id, name }) => (
              <li key={id}>
                <Button
                  className='check'
                  icon={<Check />}
                  onClick={() => {
                    onFilterClick({ id, name }, 'remove')
                  }}
                >
                  {name}
                </Button>
              </li>
            ))}
          </ul>
        </footer>
      </section>
    </LeftSideStyle>
  )
}

export default LeftSide
