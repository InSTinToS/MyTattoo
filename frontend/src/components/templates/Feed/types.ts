interface IShowAuthModalState {
  open: boolean
  page: 'sign-in' | 'sign-up'
}

interface IFeedContext {
  showLeftSide: boolean
  toggleShowLeftSide: () => void
  showAuthModal: IShowAuthModalState
  toggleShowAuthModal: (newState: IShowAuthModalState) => void
}

export type { IFeedContext, IShowAuthModalState }
