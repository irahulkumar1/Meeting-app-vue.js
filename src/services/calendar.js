import axios from 'axios';
import AppConfig from '@/config.js';

const getCalendar = async (date) => {
    const response = await axios.get(`https://mymeetingsapp.herokuapp.com/api/calendar?date=${date}`, {
        headers: {
            ContentType: "application/json",
            Authorization: AppConfig.apiToken
        }
    })
    return response.data
}
// patch
export {
    getCalendar
};