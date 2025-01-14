import {combineReducers, configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    // Add your reducers here
});

export const store = configureStore({
    reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;