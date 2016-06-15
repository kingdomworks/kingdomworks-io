import React from 'react';

import JumboComponent from './jumbo';
import AboutComponent from './about';
import ContactComponent from '../contact';

import './landing.scss';

class LandingComponent extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        var body = document.querySelector('body');
        body.classList = ['home'];
    }
 
    render() {
       
        return (
             <div className="landing-wrapper">
                <JumboComponent/>
                <AboutComponent/>
                <ContactComponent/>
            </div>
        )
    }
}

export default LandingComponent;
