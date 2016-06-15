import React from 'react';

class ConsultingComponent extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        var body = document.querySelector('body');
        body.classList = ['consulting'];
    }

    render() {
        return (
            <h2 className='landing'>
                This is the consulting page.
            </h2>
        )
    }
}

export default ConsultingComponent;
