import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import WhyUs from './components/whyus/WhyUs';
import Team from './components/team/Team';
import ContactUs from './components/contactus/ContactUs'
import Description from './components/description/Description';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App() {
    return (
        <Router>
           <Navbar />
           <Switch>
                <Route path = "/" exact component = {Home} />
                <Route path = "/description" exact component = {Description} />
                <Route path = "/whyus" exact component = {WhyUs} />
                <Route path = "/team" exact component = {Team} />
                <Route path = "/contactus" exact component = {ContactUs} />

            </Switch>
        </Router>
    )
}
