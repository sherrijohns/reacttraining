import { render } from "react-dom";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { About } from "./About";

import { Nav } from "./Nav";

// This is a named import (preferred by Cory)
import { App } from "./App";
import { FoodForm } from "./FoodForm";

//render(<Heading message="hello (from parms)" />, document.getElementById("root"));
//render(<Heading>hello lunch!</Heading>, document.getElementById("root"));
render(
  <BrowserRouter>
    <Nav />
    <Route path="/about">
      <About />
    </Route>
    <Route path="/foodform">
      <FoodForm />
    </Route>
    <Route path="/" exact>
      <App />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);
