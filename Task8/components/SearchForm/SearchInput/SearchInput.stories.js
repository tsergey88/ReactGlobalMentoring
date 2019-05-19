import React from "react";
import { storiesOf } from "@storybook/react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import SearchInput from "./SearchInput";
import rootReducer from "../../../redux/reducers";

const store = createStore(rootReducer);

const withProvider = story => <Provider store={store}>{story()}</Provider>;

storiesOf("SearchInput", module)
  .addDecorator(withProvider)
  .add("Default Search Input", () => <SearchInput />);
