import React from 'react';

import './contact.scss';

class ContactComponent extends React.Component {
    constructor() {
        super();
        this.emailAccount = 'hi@kingdomworks.io';
    }
 
    render() {
       
        return (
            <section className="contact">
                <div className="inner">
                    <h2>Get in touch</h2>
                    <div className="email">
                        <h3>bussiness inquiries</h3>
                        <span><a href="mailto:{this.emailAccount}">{this.emailAccount}</a></span>
                    </div>
                    <div className="social">
                        social shit here
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactComponent;
