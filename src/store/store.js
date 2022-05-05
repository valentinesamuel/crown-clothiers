import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import {loggerMiddleWare} from './middleware/logger' => You can also use your own middleware logger
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// filter based on the truthiness or falsness of the condition
const middleWares = [process.env.NODE_ENV === "development" && logger, thunk].filter(
  Boolean
);

// if we are on production and there is a window object and reduxdevtools is enabled, used redux_devtools; else, use normal compose from redux
const composeEnhancer =
  compose(
    process.env.NODE_ENV !== "production" &&
      window &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
