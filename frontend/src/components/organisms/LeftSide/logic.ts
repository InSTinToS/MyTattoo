import type { IFiltersState, TOnFilterClick } from './types'

import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

const fakeStylesToFilter = [
  { name: 'Maori', id: '1' },
  { name: 'Old School', id: '2' },
  { name: 'Tribal', id: '3' },
  { name: 'Trash', id: '4' },
  { name: 'Aquarela', id: '5' }
]

const transition = 'all 0.3s ease-in-out'

const useLeftSide = () => {
  const theme = useTheme()

  const [filters, setFilters] = useState<IFiltersState>()

  const [showUnsignedsFilters, setShowUnsignedsFilters] = useState(true)

  const arrowAnimation = {
    transition,
    transform: showUnsignedsFilters ? 'rotate(0deg)' : 'rotate(180deg)'
  }

  const notAddedFiltersAnimation = {
    transition,
    flex: showUnsignedsFilters ? '1' : 'none',
    height: showUnsignedsFilters ? '100%' : '0%'
  }

  const getFilters = () => {
    setFilters(prev => ({
      ...prev,
      unsigned: fakeStylesToFilter
    }))
  }

  const onArrowClick = () => {
    setShowUnsignedsFilters(prev => !prev)
  }

  const onFilterClick: TOnFilterClick = (filter, action) => {
    switch (action) {
      case 'add':
        setFilters(prev => ({
          ...prev,
          unsigned: prev.unsigned?.filter(
            prevFilter => prevFilter.id !== filter.id
          ),
          added: prev.added ? [...prev.added, filter] : [filter]
        }))
        break

      case 'remove':
        setFilters(prev => ({
          ...prev,
          added: prev.added?.filter(prevFilter => prevFilter.id !== filter.id),
          removed: prev.removed ? [...prev.removed, filter] : [filter]
        }))
        break

      case 'unsign':
        setFilters(prev => ({
          ...prev,
          removed: prev.removed?.filter(
            prevFilter => prevFilter.id !== filter.id
          ),
          unsigned: prev.unsigned ? [...prev.unsigned, filter] : [filter]
        }))
        break

      default:
        throw new Error('Not expected default in switch')
    }
  }

  useEffect(() => {
    getFilters()
  }, [])

  return {
    theme,
    filters,
    onArrowClick,
    onFilterClick,
    arrowAnimation,
    showUnsignedsFilters,
    notAddedFiltersAnimation
  }
}

export { useLeftSide }
