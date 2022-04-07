import { useLeftSide } from './logic'
import { LeftSideStyle } from './styles'
import type { ILeftSideProps } from './types'

import Close from '../../atoms/icons/Close'

import DropArrow from 'components/atoms/DropArrow'
import Input from 'components/atoms/Input'
import Check from 'components/atoms/icons/Check'
import Plus from 'components/atoms/icons/Plus'
import Search from 'components/atoms/icons/Search'

import Button from 'components/molecules/Button'

import { transparentize } from 'polished'

const LeftSide = (props: ILeftSideProps) => {
  const {
    theme,
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
            <Search color={theme.colors.secondary} size={18} />

            <Input name='filter' placeholder='Procure por filtros' />
          </form>

          <DropArrow
            size={18}
            onClick={onArrowClick}
            color={theme.colors.secondary}
            condition={showUnsignedsFilters}
          />
        </header>

        <div style={notAddedFiltersAnimation}>
          <ul>
            {filters?.unsigned?.map(({ id, name }) => (
              <li key={id}>
                <Button
                  stroke={2}
                  icon={<Plus size={12} color={theme.colors.secondary} />}
                  colors={{
                    border: theme.colors.primary,
                    background: transparentize(0.6, theme.colors.primary)
                  }}
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
                  colors={{ background: theme.colors.red }}
                  icon={<Close color={theme.colors.secondary} size={12} />}
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
                  icon={<Check color={theme.colors.secondary} size={12} />}
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
