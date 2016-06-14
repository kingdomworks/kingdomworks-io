import React from 'react';

import MenuComponent from './components/menu';

class AppComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="AppWrapper">
                {React.cloneElement(this.props.children)};
                <MenuComponent/>
            </div>
        )
    }
}

export default AppComponent;
