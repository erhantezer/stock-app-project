import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser : false,
  loading: false,
  error: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {}
});

// export const {} = authSlice.actions

export default authSlice.reducer