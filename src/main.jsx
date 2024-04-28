import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { GlobalStyle } from "./globalStyles/globalStyles.styled.js";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/vite-pack">
          <GlobalStyle />
          <App/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
