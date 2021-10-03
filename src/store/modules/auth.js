import { login } from '@services/auth'
const KEY_TOKEN = 'token';
const KEY_EMAIL = 'email';
const KEY_ROLE = 'role';

const auth = {
    state: {
        token: '',
        email: '',
        role: '',
    },
    getters: {
        isAuthenticated(state) {
            return !!state.token;
        },
        isAdmin(state) {
            return state.role === 'admin';
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setEmail(state, email) {
            state.email = email;
        },
        setRole(state, role) {
            state.role = role;
        }
    }action

}