import { Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";

import RouteWithSubRoutes from "./components/RouteWithSubRoutes";
import { routes } from "./routes";
import "./App.css";

function App() {
  return (
    <div className="container p-5">
      <Nav />

      <Switch>
        {routes.map((route) => {
          return <RouteWithSubRoutes {...route} key={route.path} />;
        })}
      </Switch>
    </div>
  );
}

export default App;
