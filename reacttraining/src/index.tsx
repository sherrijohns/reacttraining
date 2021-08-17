import {render} from 'react-dom';
import React from "react";

// This is a named import (preferred by Cory)
import { App } from "./App";

//render(<Heading message="hello (from parms)" />, document.getElementById("root"));
//render(<Heading>hello lunch!</Heading>, document.getElementById("root"));
render (<App />, document.getElementById("root"));

