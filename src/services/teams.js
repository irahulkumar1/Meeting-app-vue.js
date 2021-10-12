import axios from 'axios';
import AppConfig from '@/config.js';

function getTeams() {
    return axios.get(`https://mymeetingsapp.herokuapp.com/api/teams`, {
        headers: {
            ContentType: "application/json",
            Authorization: AppConfig.apiToken
        }
    })
        .then(res => {
            return res.data;
        });

}

const excuseTeams = async (id) => {
    const response = await axios.patch(`https://mymeetingsapp.herokuapp.com/api/teams/${id}?action=remove_member`, {
        headers: {
            ContentType: "application/json",
            Authorization: AppConfig.apiToken
        }
    })
    return response
}
function addTeams(form) {
    const config = {
        method: 'POST',
        url: 'https://mymeetingsapp.herokuapp.com/api/teams',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: AppConfig.apiToken
            Authorization: AppConfig.apiToken
        },
        data: form
    }
    return axios(config).then(res => {
        console.log(res.data)
        return res.data;
    })
        .catch(error => error)
}

export {
    getTeams, excuseTeams, addTeams
};