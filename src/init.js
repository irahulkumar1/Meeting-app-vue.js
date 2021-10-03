import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Router from 'vue-router';
import dateFilter from '@/filters/date';
import '@/services/configureAxios';
import moment from 'moment';
import AppAlert from '@/components/utils/AppAlert';
import AppSpinner from '@/components/utils/AppSpinner';

Vue.use(Router)
Vue.prototype.moment = moment
Vue.filter('date', dateFilter);
Vue.component('AppSpinner', AppSpinner);
Vue.component('AppAlert', AppAlert);