import axios from 'axios';
import AppConfig from '@/config.js';

const viewMeetings = async () => {
    const response = await axios.get(`https://mymeetingsapp.herokuapp.com/api/meetings?period=all&search=vue`, {
        headers: {
            ContentType: "application/json",
            Authorization: AppConfig.apiToken
        }
    })
    return response.data
}

export {
    viewMeetings
 };