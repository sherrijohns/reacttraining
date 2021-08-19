import { render } from "react-dom";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { About } from "./About";

import { Nav } from "./Nav";

// This is a named import (preferred by Cory)
import { QueryClient, QueryClientProvider } from "react-query";
import { App } from "./App";
//render(<Heading message="hello (from parms)" />, document.getElementById("root"));
//render(<Heading>hello lunch!</Heading>, document.getElementById("root"));

render(<App />, document.getElementById("root"));
