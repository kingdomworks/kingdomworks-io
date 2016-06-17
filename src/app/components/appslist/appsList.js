import React from 'react';

import ContactComponent from '../contact';
import './appsList.scss';

class AppsListComponent extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const body = document.querySelector('body');
        body.classList.remove('home');
        body.classList.remove('consulting');
        body.classList.add('apps-list');
    }

    render() {
        return (
            <div className="applist-wrapper">
                <div className="temp">
                    <h2 className='landing'>
                        Stay tuned...
                    </h2>
                </div>
                <ContactComponent/>
            </div>
        )
    }
}

export default AppsListComponent;


