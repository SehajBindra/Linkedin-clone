import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
