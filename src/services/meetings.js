import axios from 'axios';
// import AppConfig from '@/config.js';

const getmeetings = async (searchDescription, period) => {
    const response = await axios.get(`https://mymeetingsapp.herokuapp.com/api/meetings?period=${period}&search=${searchDescription}`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return response.data
}

const getUsers = async () => {
    const response = await axios.get(`https://mymeetingsapp.herokuapp.com/api/users`, {
        headers: {
            ContentType: "application/json",
            Authorization: localStorage.getItem('token')
        }
    })
    return response.data
}

// add a meeting 


function addMeetings(form) {
    const config = {
        method: 'POST',
        url: 'https://mymeetingsapp.herokuapp.com/api/meetings',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: AppConfig.apiToken
            Authorization: localStorage.getItem('token')
        },
        data: form
    }
    return axios(config).then(res => {
        console.log(res.data)
        return res.data;
    })
        .catch(error => error)
}

// const addAttendee = async () => {
//     const response = await axios.patch(`https://mymeetingsapp.herokuapp.com/api/meetings/345678901234567890123412?action=add_attendee&userId=rupeshranjan123@gmail.com`, {
//         headers: {
//             ContentType: "application/json",
//             Authorization: AppConfig.apiToken
//         }
//     })
//     return response.data
// }

// excuse
const excuseMeeting = async (id) => {
    const response = await axios.patch(`https://mymeetingsapp.herokuapp.com/api/meetings/${id}?action=remove_attendee`, null, {
        headers: {
            ContentType: "application/json",
            Authorization: localStorage.getItem('token')
        }
    })
    return response
}
export {
    getmeetings, getUsers, addMeetings, excuseMeeting
};