import React from "react";
import ReactDOM from "react-dom";
import { ComponentMain } from "./components/ComponentMain";
import { PureComponentMain } from "./components/PureComponentMain";
import { FuncComponentMain } from "./components/FuncComponent";

import "./main.css";

const title = React.createElement("h1", {}, "Hello World (createElement)");

ReactDOM.render(title, document.getElementById("root1"));

ReactDOM.render(<ComponentMain />, document.getElementById("root2"));

ReactDOM.render(<PureComponentMain />, document.getElementById("root3"));

ReactDOM.render(<FuncComponentMain />, document.getElementById("root4"));