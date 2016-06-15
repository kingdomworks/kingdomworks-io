import React from 'react';

import ContactComponent from '../contact';
import './appsList.scss';

class AppsListComponent extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        var body = document.querySelector('body');
       body.classList = ['apps-list'];
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


