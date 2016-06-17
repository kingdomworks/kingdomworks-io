import React from 'react';

import './video.scss';
import VideoService from './video.service';
const VideoSvc = new VideoService();

class VideoComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            videoId: ''
        };
        this.updateVideoID = this.updateVideoID.bind(this);
    }

    componentDidMount() {
        VideoSvc.getYoutubeVideos().then((youtubeInfo) => {
            const myVideoId = youtubeInfo.items[0].id.videoId;
            console.log(myVideoId);
            this.updateVideoID(myVideoId);
        })
    }

    updateVideoID(latestVideoId) {
        this.setState({
            videoId: latestVideoId
        })
    }

    render() {
        return (
            <section className='video-education'>
                <div className="inner">
                    <h2>We care so much about developer education, our Founder posts a new training video every week that anybody can watch for free.</h2>
                    <div className="video-container">
                        <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + this.state.videoId} frameborder="0"></iframe>
                    </div>
                </div>
            </section>
        )
    }
}

export default VideoComponent;
