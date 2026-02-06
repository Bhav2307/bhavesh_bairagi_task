import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { userService } from '../../services/user';

interface AuthState {
  userList: Array<Object>;
}

const initialState: AuthState = {
  userList: [],
};

export const userList = createAsyncThunk(
  'order/userList',
  async (data: any) => {
    const res = await userService.userList(data);
    return res;
  },
);

const userListSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const {} = userListSlice.actions;

export default userListSlice.reducer;
