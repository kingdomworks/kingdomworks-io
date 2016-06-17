import React from 'react';

import './video.scss';
import VideoService from './video.service';
const VideoSvc = new VideoService();

class VideoComponent extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        // VideoSvc.getSocialMediaAccounts().then((socialMediaAccounts) => {
        //     this.updateAccounts(socialMediaAccounts);
        // })
    }

    updateAccounts(accounts) {
        this.setState({
            socialMedia: accounts
        })
    }

    render() {
        return (
            <section className='video-education'>
                <h2>We care so much about developer education, our Founder posts a new training video every week that anybody can watch for free.</h2>
            </section>
        )
    }
}

export default VideoComponent;
