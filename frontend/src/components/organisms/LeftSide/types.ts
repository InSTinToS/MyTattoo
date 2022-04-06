interface IFilter {
  name: string
  id: string
}

interface IFiltersState {
  added?: IFilter[]
  removed?: IFilter[]
  unsigned?: IFilter[]
}

type TOnFilterClick = (
  filter: IFilter,
  action: 'add' | 'remove' | 'unsign'
) => void

interface ILeftSideStyleProps {}

interface ILeftSideProps extends ILeftSideStyleProps {}

export type {
  IFiltersState,
  TOnFilterClick,
  ILeftSideProps,
  ILeftSideStyleProps
}
