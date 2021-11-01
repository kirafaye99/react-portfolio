import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { Switch, Route } from 'react-dom';
// import { Switch} from 'react-router-dom';


export default function PortfolioContainer() {
    // const [currentPage, setCurrentPage] = useState('About');

    // const renderPage = () => {
    //     if (currentPage === 'About') {
    //         return <About />;
    //     }
    //     if (currentPage === 'Portfolio') {
    //         return <Portfolio />;
    //     }
    //     if (currentPage === 'Contact') {
    //         return <Contact />;
    //     }
    //     if (currentPage === 'Resume') {
    //         return <Resume />;
    //     }
    //     return <About />;
    // };

    // const path = () => {
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
    // };

    // const handlePageChange = (path) => setCurrentPage(path);

    // return (
    //     <div>
    //         <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
    //         {renderPage()}
    //         <Footer/>
    //     </div>
    // );
}