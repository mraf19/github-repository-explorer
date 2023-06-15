import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface accountState {
  loading: boolean;
  account: string[];
  error: string;
}
const initialState: accountState = {
  loading: true,
  account: [],
  error: "",
};

export const fetchAccount = createAsyncThunk(
  "account/fetchAccount",
  (textSearch: string) => {
    return axios
      .get(`https://api.github.com/search/users?q=${textSearch}&per_page=5`)
      .then((res) => res.data.items.map((item: any) => item.login));
  }
);
const AccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAccount.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAccount.fulfilled, (state, action) => {
      state.loading = false;
      state.account = action.payload;
      state.error = "";
    });
    builder.addCase(fetchAccount.rejected, (state, action) => {
      state.loading = false;
      state.account = [];
      state.error = action.error.message!;
    });
  },
});

export default AccountSlice.reducer;
