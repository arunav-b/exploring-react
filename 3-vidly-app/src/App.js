import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Movies from "./components/movies";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";
import NavBar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/notFound" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/notFound" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
