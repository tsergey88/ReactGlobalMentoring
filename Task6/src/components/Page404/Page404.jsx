// @flow
import React from "react";
import { Link } from "react-router-dom";

import { Footer } from "../Footer";

type Props = {
  location: { pathname: string }
};

export const Page404 = ({ ...props }: Props) => (
  <>
    <div className="container">
      <div>
        404 Error <b>Page {props.location.pathname}</b> Not Found
      </div>
      <div>
        <Link to={"/"}>На главную</Link>
      </div>
    </div>
    <Footer />
  </>
);
