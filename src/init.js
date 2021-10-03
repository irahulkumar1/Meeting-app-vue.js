import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Router from 'vue-router';
import '@/services/configureAxios';
import moment from 'moment'
Vue.use(Router)

Vue.prototype.moment = moment