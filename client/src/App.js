import NavBar from "./Components/NavBar"
import About from "./Components/About"
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}


