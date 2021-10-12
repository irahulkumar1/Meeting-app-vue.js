import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Router from 'vue-router';
import dateFilter from '@/filters/date';
import '@/services/configureAxios';
import moment from 'moment';
import AppAlert from '@/components/utils/AppAlert';
import AppSpinner from '@/components/utils/AppSpinner';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Vuex from 'vuex'

Vue.use(Router)
Vue.use(Vuex);
Vue.prototype.moment = moment
Vue.filter('date', dateFilter);
Vue.component('AppSpinner', AppSpinner);
Vue.component('AppAlert', AppAlert);
Vue.use(VueToast);