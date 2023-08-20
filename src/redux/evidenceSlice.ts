import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  mobile: string
}

const initialState: UserState = {
  mobile: "09100592882",
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    user: (state, action: PayloadAction<string>) => {
      state.mobile = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { user } = UserSlice.actions

export default UserSlice.reducer