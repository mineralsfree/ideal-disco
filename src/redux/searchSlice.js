import {createSlice} from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
    user: {},
    repos: []
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload
    },
    search: (state, action) => {
    },
    search_success: (state, action) => {
      state.user = action.payload.user;
      state.repos = action.payload.repos;
    },
    fetch_repos: ()=>{},
    search_user_error: (state)=>{
      state.user = {not_found: true}
    },
    repos_success: (state, action) => {
      return {
        ...state,
        user: state.user,
        repos: action.payload.repos,
      }
    }
  }
})
export const {change, search,fetch_repos } = searchSlice.actions;

export default searchSlice.reducer;