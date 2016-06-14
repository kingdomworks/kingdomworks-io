import React from 'react';

import ContactService from './contact.service';
import './contact.scss';

const Svc = new ContactService();

class ContactComponent extends React.Component {
    constructor() {
        super();
        this.emailAccount = 'hi@kingdomworks.io';
        this.updateAccounts = this.updateAccounts.bind(this);
    }

    componentDidMount() {
        Svc.getSocialMediaAccounts().then((socialMediaAccounts) => {
            console.log(socialMediaAccounts);
            this.updateAccounts(socialMediaAccounts);
        })
    }

    updateAccounts(accounts) {
        this.setState({
            socialMedia: accounts
        })
    }

    render() {
        return (
            <section id="contact-pane" className="contact">
                <h2 className="section-title outer">Get in touch</h2>
                <div className="inner">
                    <div className="location">
                        <h3>Location</h3>
                        <p>We are located in Millcreek, UT</p>
                    </div>
                    <div className="email">
                        <h3>bussiness inquiries</h3>
                        <p><a href={'mailto:' + this.emailAccount}>{this.emailAccount}</a></p>
                    </div>
                    <div  className="social">
                        <h3>Say #hello.</h3>
                        <p>

                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactComponent;
