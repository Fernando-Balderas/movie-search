import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    movies: []
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    updateMovies: (state, action) => {
      state.movies = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateMovies } = searchSlice.actions

export default searchSlice.reducer