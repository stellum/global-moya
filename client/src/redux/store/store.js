import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "../reducer/user/userSlice";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import buttonSlice from "../reducer/buttonSlice";
import modalSlice from "../reducer/modalSlice";
import cardTypeSlice from "../reducer/cardTypeSlice";
import categorySlice from "../reducer/categorySlice";
import subsSlice from "../reducer/user/subsSlice";
import keywordConnectedSlice from "../reducer/keywordConnectedSlice";
import searchFilterSlice from "../reducer/searchFilterSlice";
import scrapFolderSlice from "../reducer/scrapFolderSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["modalSlice", "categorySlice", "accessTokenSlice"],
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
  scrapFolderSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export const persistor = persistStore(store);
export default store;
