import React from 'react';

import JumboComponent from './jumbo';

import classes from './landing.scss';

class LandingComponent extends React.Component {
    constructor() {
        super();
    }
 
    render() {
       
        return (
            <JumboComponent/>
        )
    }
}

export default LandingComponent;
