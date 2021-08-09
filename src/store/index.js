import { configureStore, combineReducers } from '@reduxjs/toolkit'
import rootReducer from './slices/rootSlice'

const reducers = combineReducers({
    root: rootReducer,
})

export const store = configureStore({
    reducer: reducers
})
