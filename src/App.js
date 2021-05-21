import React, { useEffect } from "react";
import "./App.scss";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import menuRouters from "./routers/menuRouters";

function App(props) {
  useEffect(() => {
    window.onresize = function () {
      const widthClient = window.innerWidth;
      console.log(widthClient);
    };
  }, []);
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Switch>
          {menuRouters.map((value, index) => {
            return (
              <Route
                path={value.path}
                component={value.component}
                exact={value.exact}
                key={index}
              />
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
