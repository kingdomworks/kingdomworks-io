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
        const body = document.querySelector('body');
        body.classList.remove('apps-list');
        body.classList.remove('consulting');
        body.classList.add('home');
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
