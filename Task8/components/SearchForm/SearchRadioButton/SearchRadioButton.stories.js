import React from "react";
import { storiesOf } from "@storybook/react";

import { SearchRadioButton } from "./SearchRadioButton";

storiesOf("SearchRadioButton", module).add("Default Radio Button", () => (
  <>
    <SearchRadioButton
      title="release date"
      id="1"
      name="sortBy"
      isChecked
      value="release_date"
      defaultChecked
    />
    <SearchRadioButton
      title="rating"
      id="2"
      name="sortBy"
      value="vote_average"
    />
  </>
));
