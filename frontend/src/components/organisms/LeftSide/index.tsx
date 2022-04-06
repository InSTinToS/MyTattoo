import { useLeftSide } from './logic'
import { LeftSideStyle } from './styles'
import type { ILeftSideProps } from './types'

import Input from 'components/atoms/Input'
import Arrow from 'components/atoms/icons/Arrow'
import Search from 'components/atoms/icons/Search'

import Label from 'components/molecules/Label'

import { transparentize } from 'polished'

const LeftSide = (props: ILeftSideProps) => {
  const {
    theme,
    filters,
    onArrowClick,
    arrowAnimation,
    onFilterClick,
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

          <Arrow
            size={18}
            style={arrowAnimation}
            onClick={onArrowClick}
            color={theme.colors.secondary}
          />
        </header>

        <div style={notAddedFiltersAnimation}>
          <ul>
            {filters?.unsigned?.map(({ id, name }) => (
              <li
                key={id}
                onClick={() => {
                  onFilterClick({ id, name }, 'add')
                }}
              >
                <Label
                  label={name}
                  icon='+'
                  stroke={2}
                  colors={{
                    border: theme.colors.primary,
                    background: transparentize(0.6, theme.colors.primary)
                  }}
                />
              </li>
            ))}
          </ul>
        </div>

        <footer>
          <ul>
            {filters?.removed?.map(({ id, name }) => (
              <li
                key={id}
                onClick={() => {
                  onFilterClick({ id, name }, 'unsign')
                }}
              >
                <Label
                  label={name}
                  icon='x'
                  colors={{
                    background: theme.colors.red
                  }}
                />
              </li>
            ))}
          </ul>

          <ul>
            {filters?.added?.map(({ id, name }) => (
              <li
                key={id}
                onClick={() => {
                  onFilterClick({ id, name }, 'remove')
                }}
              >
                <Label label={name} icon='v' />
              </li>
            ))}
          </ul>
        </footer>
      </section>
    </LeftSideStyle>
  )
}

export default LeftSide
