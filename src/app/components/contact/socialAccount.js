import React from 'react';

const SocialAccount = (props) => {
    return (
        <span>
            <a class="account-link" href={props.data.link} target="_blank">
                <img src={'/assets/img/' + props.data.provider + '.svg'} alt={'Connect with us on ' + props.data.accountTitle} />
            </a>
        </span>
    );
}

export default SocialAccount;
