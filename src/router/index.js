import Router from 'vue-router';

import Calendar from '@/components/Calendar';
import Meetings from '@/components/Meetings';
import Teams from '@/components/Teams.vue';
import AddMeetings from '@/components/AddMeetings.vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
// import SearchMeetings from '@/components/SearchMeetings.vue';
import FilterMeetings from '@/components/FilterMeetings.vue';


const router = new Router({
    mode: 'history',
    routes: [
        {
            name: "Login",
            path: '/',
            component: Login
        },
        {
            name: "Register",
            path: '/register',
            component: Register
        },
        {
            name: "Calendar",
            path: '/calendar',
            component: Calendar
        },
        {
            name: "Meetings",
            path: '/meetings',
            component: Meetings,
            children: [
                {
                    name: "FilterMeetings",
                    path: '/meetings/filtermeetings',
                    component: FilterMeetings
                },
                {
                    name: "AddMeetings",
                    path: '/meetings/addmeetings',
                    component: AddMeetings,
                },
            ]
        },

        {
            name: "Teams",
            path: '/teams',
            component: Teams
        },

    ],

})

export default router;