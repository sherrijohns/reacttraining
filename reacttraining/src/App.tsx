import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route } from "react-router-dom";
import { About } from "./About";
import { FoodForm } from "./FoodForm";
import { Home } from "./Home";
import { Nav } from "./Nav";
import { UserContextProvider, UserContextType } from "./UserContext";

const user: UserContextType = {
  email: "sherri.johns@gmail.com",
  name: "Sherri Johns",
  role: "super user",
  token: "random",
};

export function App() {
  const queryClient = new QueryClient();

  return (
    <UserContextProvider value={user}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Nav />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/foodform" exact>
            <FoodForm />
          </Route>
          <Route path="/foodform/:foodId">
            <FoodForm />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </BrowserRouter>
      </QueryClientProvider>
    </UserContextProvider>
  );
}
