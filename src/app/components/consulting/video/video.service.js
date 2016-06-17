class VideoService {
    constructor() {
        this.apiURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet,id&order=date&maxResults=20';
        this.key = '&key=AIzaSyB4A8f4BYXfcWHsY5cRTQ2-qqNazWVVxc4';
        this.channelID = '&channelId=UC027Ca0ircpvvsWZDYo8Trw';

    }
  
  getYoutubeVideos() {
    return fetch(this.apiURL + this.key + this.channelID, {
      method: 'GET'
    }).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Response status: ' + response.status);
      } else {
        let body = response.json();
        return body;
      }
    }).catch((responseError) => {
      throw new Erorr('Error retrieving youtube video ID', responseError)
    })
  }
}

export default VideoService;
