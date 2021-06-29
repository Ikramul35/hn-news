import { Container } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import BestStories from "./pages/bestStories/Index";
import NewStories from "./pages/newStories/Index";
import TopStories from "./pages/topStories/Index";

function App() {
  return (
    <>
      <Container>
        <Header />
        <main style={{ paddingBottom: "20px" }}>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/newstories" component={NewStories} />
            <Route path="/beststories" component={BestStories} />
            <Route path="/" component={TopStories} />
          </Switch>
        </main>
      </Container>
    </>
  );
}

export default App;
