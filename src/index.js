import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./styles/index.css";
import { PersistGate } from "redux-persist/lib/integration/react";
import { currentTheme as theme } from './theme';

const container = document.getElementById("root");
container.style.backgroundColor = theme.test;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);