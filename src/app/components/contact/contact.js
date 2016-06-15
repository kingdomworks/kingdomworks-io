import React from 'react';

import ContactService from './contact.service';
import SocialAccount from './socialAccount';
import './contact.scss';

const Svc = new ContactService();

class ContactComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            emailAccount: 'hi@kingdomworks.io',
            socialMedia: []
        }
        this.updateAccounts = this.updateAccounts.bind(this);
    }

    componentDidMount() {
        Svc.getSocialMediaAccounts().then((socialMediaAccounts) => {
            this.updateAccounts(socialMediaAccounts);
        })
    }

    updateAccounts(accounts) {
        this.setState({
            socialMedia: accounts
        })
    }

    render() {
        let accounts = this.state.socialMedia.map((account) => {
            return <SocialAccount key={account.provider} data={account} />
        })

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
                        <p>
                            Reach out to us at: 
                            {' '}
                            <a href={'mailto:' + this.state.emailAccount}>{this.state.emailAccount}</a>
                        </p>
                    </div>
                    <div className="social">
                        <h3>Say #hello.</h3>
                        <p className="accounts">
                            {accounts}
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactComponent;
