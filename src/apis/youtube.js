import axios from 'axios';

const KEY = 'AIzaSyDTwGtquaMeGZgCxEycd2h9KluIGldf9Vw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    } 
});