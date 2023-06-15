import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "../feature/AccountSlice";

const store = configureStore({
  reducer: {
    account: AccountSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
