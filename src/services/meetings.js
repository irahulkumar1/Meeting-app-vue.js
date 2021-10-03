import axios from 'axios';
import AppConfig from '@/config.js';

const getmeetings = async () => {
    const response = await axios.get(`https://mymeetingsapp.herokuapp.com/api/meetings?period=all&search=vue`, {
        headers: {
            ContentType: "application/json",
            Authorization: AppConfig.apiToken
        }
    })
    return response.data
}

const getUsers = async () => {
    const response = await axios.get(`https://mymeetingsapp.herokuapp.com/api/users`, {
        headers: {
            ContentType: "application/json",
            Authorization: AppConfig.apiToken
        }
    })
    return response.data
}

// add a meeting 

const postMeetings = async () => {
    const response = await axios.post(`https://mymeetingsapp.herokuapp.com/api/meetings`, {
        headers: {
            ContentType: "application/json",
            Authorization: AppConfig.apiToken
        }
    })
    return response.data
}

const addAttendee = async () => {
    const response = await axios.patch(`https://mymeetingsapp.herokuapp.com/api/meetings/345678901234567890123412?action=add_attendee&userId=rupeshranjan123@gmail.com`, {
        headers: {
            ContentType: "application/json",
            Authorization: AppConfig.apiToken
        }
    })
    return response.data
}
export {

    getmeetings, getUsers, postMeetings, addAttendee
};