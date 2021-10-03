import Router from 'vue-router';

import Calendar from '@/components/Calendar';
import Meetings from '@/components/Meetings';
import Teams from '@/components/Teams.vue';
import AddMeetings from '@/components/AddMeetings.vue';
// import SearchMeetings from '@/components/SearchMeetings.vue';
import FilterMeetings from '@/components/FilterMeetings.vue';


const router = new Router({
    mode: 'history',
    routes: [
        {
            name: "Calendar",
            path: '/',
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
                    path: '/addmeetings',
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