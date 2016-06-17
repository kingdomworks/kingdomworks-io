import React from 'react';

import TechComponent from './tech';
import VideoComponent from './video';
import ContactComponent from '../contact';
import './consulting.scss';

class ConsultingComponent extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        var body = document.querySelector('body');
        body.classList.remove('apps-list');
        body.classList.remove('home');
        body.classList.add('consulting');
    }

    render() {
        return (
            <div className='consulting-wrapper'>
                <div className='intro'>
                    <h1>We believe everybody should have access to high quality software...</h1>
                    <h2>By offering our specialized skills, design & development support, and training services to other organizations who could use a hand, we hope we can reach this goal one application at a time.</h2>
                </div>
                <TechComponent/>
                <VideoComponent/>
                <ContactComponent/>
            </div>
        )
    }
}

export default ConsultingComponent;
