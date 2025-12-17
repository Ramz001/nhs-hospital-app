import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  postcode: null,
  services: [],
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPostcode(state, action) {
      state.postcode = action.payload
    },
  },
})

export const { setPostcode } = appSlice.actions

export default appSlice.reducer
