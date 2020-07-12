import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ExampleView from "./modules/example/views/ExampleView/ExampleView";

function App() {
  return (
    <Router>
      <ExampleView></ExampleView>
    </Router>
  );
}

export default App;
