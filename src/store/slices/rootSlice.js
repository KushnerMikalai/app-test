import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pageLoader: true,
}

export const rootSlice = createSlice({
  name: 'rootSlice',
  initialState,
  reducers: {
    toogleLoader: (state, action) => {
      state.pageLoader = action.payload;
    },
    showPageLoader: (state) => {
      state.pageLoader = true;
    },
    hidePageLoader: (state) => {
      state.pageLoader = false;
    },
  },
})

export const {
  showPageLoader,
  hidePageLoader,
  toogleLoader
} = rootSlice.actions
export const selectPageLoader = (state) => state.root.pageLoader

export default rootSlice.reducer
