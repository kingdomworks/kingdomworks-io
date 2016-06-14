class ContactService {
    constructor() {
        this.socialMediaAccounts = [
        {
            'provider': 'facebook',
            'accountTitle': 'Facebook',
            'link': 'https://www.facebook.com/kingdomworksllc/'
        },
        {
            'provider': 'twitter',
            'accountTitle': 'Twitter',
            'link': 'https://twitter.com/kingdomworksoft'
        },
        {
            'provider': 'medium',
            'accountTitle': 'Medium',
            'link': 'https://medium.com/@kingdomworks'
        },
        {
            'provider': 'linkedin',
            'accountTitle': 'LinkedIn',
            'link': 'https://www.linkedin.com/company/10812592?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A10812592%2Cidx%3A1-3-3%2CtarId%3A1465930719854%2Ctas%3Akingdomworks'
        }
        ];
  }
  
  getSocialMediaAccounts() {
    return Promise.resolve(this.socialMediaAccounts);
  }
}

export default ContactService;
