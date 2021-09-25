import axios from 'axios';

const getCalendar = async () => {
    const response = await axios.get(`https://mymeetingsapp.herokuapp.com/api/calendar?date=2021-09-21`, {
        headers: {
            ContentType: "application/json",
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1cGVzaHJhbmphbjEyM0BnbWFpbC5jb20iLCJ1c2VySWQiOiI2MTQ2M2QzOTEzODIzODAwMTU2YmIyMWYiLCJpYXQiOjE2MzI1Nzc3MTksImV4cCI6MTYzMjY2NDExOX0.-23d0VLbVyfPo6w4oIRK8eMSmjcv5yOsP1TLpzYZoRU"
        }
    })
    return response.data
}

export {
    getCalendar
};