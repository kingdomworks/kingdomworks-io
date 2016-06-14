import React from 'react';

import './about.scss';

class AboutComponent extends React.Component {
    constructor() {
        super();
    }
 
    render() {
       
        return (
            <section className="about text-section">
                <div className="inner center">
                    <h2 className="section-title">Who we are</h2>
                    <h3 className="sub-title">
                        We are builders, creators and makers.
                        We design with data and emotion.
                        We are empathetic, user-focused and mobile-first.
                        We are lean, agile and test-driven.
                        We are analytic cyberprophets.
                        We are wired socialites.
                    </h3>
                    <a className="get-in-touch" href="#contact-pane">Reach Out</a>
                </div>
            </section>
        )
    }
}

export default AboutComponent;
