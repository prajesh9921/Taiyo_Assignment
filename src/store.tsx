import { configureStore } from '@reduxjs/toolkit'
import commomReducer from "./redux-slices/common";

export const store = configureStore({
  reducer: {
    common: commomReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch