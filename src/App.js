// import React, {Component} from "react";
import React from "react";
// import PortfolioContainer from "./components/PortfolioContainer"
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import { Switch, Route } from 'react-dom';

import "tailwindcss/tailwind.css"

// const App = () => <PortfolioContainer />;
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <PortfolioContainer />
//         </div>
//         );
//     }
// }

const App = () => {
  return (
    <div className="App">
        <NavBar />
        <Switch>
            {/* <About path="/" />
            <About path="/about" />
            <Portfolio path="/portfolio" />
            <Contact path="/contact" />
            <Resume path="/resume" /> */}
            <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
    </div>
    )
}

export default App;