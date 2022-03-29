import {
  ActionReducerMapBuilder,
  CaseReducer,
  PayloadAction
} from '@reduxjs/toolkit'
import store from 'store'

export type Reducer<T> = CaseReducer<T, PayloadAction<Partial<T>>>

export type ExtraReducers<State> = (
  _builder: ActionReducerMapBuilder<State>
) => void

export type RootStore = ReturnType<typeof store.getState>
