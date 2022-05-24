import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { store,persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import {stripePromise} from './utils/stripe/stripe.utils'
import { Elements } from "@stripe/react-stripe-js";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
{/* replace null with a component that the app will render while it is trying to rehydrate the last state */}
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
          <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
