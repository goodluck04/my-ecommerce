import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../feature/users/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { apiSlice } from '../feature/api/apiSlice';

// app reducers are here
const rootReducer = combineReducers({ user: userReducer,[apiSlice.reducerPath]: apiSlice.reducer });

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);


// call the refresh token function on every page load or refresh
const initializeApp = async () => {
    // await store.dispatch(apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true }));
    // await store.dispatch(apiSlice.endpoints.refreshToken.initiate({}, { forceRefetch: true }));
    // await store.dispatch(apiSlice.endpoints.fetchProduct.initiate({}, { forceRefetch: true }));
}

// const initializeApp = async () => {
//     const isAuthenticated = checkUserAuthentication(); // You need to implement this function

//     if (isAuthenticated) {
//         await store.dispatch(apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true }));
//         await store.dispatch(apiSlice.endpoints.refreshToken.initiate({}, { forceRefetch: true }));
//         await store.dispatch(apiSlice.endpoints.fetchProduct.initiate({}, { forceRefetch: true }));
//     }
// }

// const checkUserAuthentication = () => {
//     // Check if the user is authenticated based on your authentication logic
//     // For example, you might check if there's a token in localStorage or sessionStorage
//     const token = localStorage.getItem('accessToken'); // Example: You might have stored the access token in localStorage
//     return !!token; // Return true if the token exists, indicating the user is authenticated
// }




initializeApp();