import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducer/user/reducer";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";

// if (process.env.NODE_ENV !== "production") {
//   middleware.push(logger);
// }

const middlewares = [logger];

const persistConfig = {
  key: "root",
  // key: "views",
  storage,
  // whitelist: ["views"],
};

const rootReducer = combineReducers({
  user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

// middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
const store = configureStore({
  // combineReducer와 동일하다
  reducer: persistedReducer,

  middleware: [...middlewares],
});

export const persistor = persistStore(store);
export default store;
