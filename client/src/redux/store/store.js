import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import userSlice from "../reducer/user/userSlice";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";
import buttonSlice from "../reducer/buttonSlice";
import modalSlice from "../reducer/modalSlice";
import cardTypeSlice from "../reducer/cardTypeSlice";
import categorySlice from "../reducer/categorySlice";
import subsSlice from "../reducer/user/subsSlice";
import keywordConnectedSlice from "../reducer/keywordConnectedSlice";
import searchFilterSlice from "../reducer/searchFilterSlice";

// if (process.env.NODE_ENV !== "production") {
//   middleware.push(logger);
// }

const persistConfig = {
  key: "root",
  // key: "views",
  storage,
  // whitelist: ["searchFilterSlice"],
  blacklist: [
    "modalSlice",
    "categorySlice",
    "buttonSlice",
    // "keywordConnectedSlice",
    // "searchFilterSlice",
  ],
};

const rootReducer = combineReducers({
  user: userSlice,
  buttonSlice,
  modalSlice,
  cardTypeSlice,
  categorySlice,
  subsSlice,
  keywordConnectedSlice,
  searchFilterSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  // combineReducer와 동일하다
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export const persistor = persistStore(store);
export default store;
