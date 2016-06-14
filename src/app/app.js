import React from 'react';

import MenuComponent from './components/menu';

import './app.scss';

class AppComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="app-wrapper">
                {React.cloneElement(this.props.children)}
                <MenuComponent/>
            </div>
        )
    }
}

export default AppComponent;
