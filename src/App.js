import React, {Component} from "react";
import PortfolioContainer from "./components/PortfolioContainer"

import "tailwindcss/tailwind.css"

// const App = () => <PortfolioContainer />;
class App extends Component {
  render() {
    return (
      <div>
        <PortfolioContainer />
        </div>
        );
    }
}

export default App;