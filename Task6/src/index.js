import React from "react";
import { render } from "react-dom";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import rootReducer from "./reducers";
import { MainComponent } from "./components/MainComponent";
import { ItemComponent } from "./components/ItemComponent";
import { Page404 } from "./components/Page404";

import "./main.css";

const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={MainComponent} />
          <Route path={"/film/:id"} component={ItemComponent} />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
