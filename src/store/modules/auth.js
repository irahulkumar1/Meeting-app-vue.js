import { login } from "@/services/managements.js"

const KEY_TOKEN = 'token';
const KEY_EMAIL = 'email';
const KEY_NAME = 'name';

const auth = {
    state: {
        token: localStorage.getItem(KEY_TOKEN) || '',
        email: localStorage.getItem(KEY_EMAIL) || '',
        name: localStorage.getItem(KEY_NAME) || '',

    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setEmail(state, email) {
            state.email = email;
        },
        setName(state, name) {
            state.name = name;
        }
    },
    getters: {
        isAuthenticated(state) {
            return !!state.token
        }
    },
    actions: {
        login({ commit }, credentials) {
            return login(credentials)
                .then(data => {
                    const { token, email } = data

                    localStorage.setItem(KEY_TOKEN, token);
                    localStorage.setItem(KEY_EMAIL, email);
                    // localStorage.setItem(KEY_ROLE, role);

                    commit('setToken', token);
                    commit('setEmail', email);
                    // commit('setRole', role);

                    return email;
                });
        },
        logout({ commit }) {
            localStorage.removeItem(KEY_TOKEN);
            localStorage.removeItem(KEY_EMAIL);
            localStorage.removeItem(KEY_NAME);

            commit('setToken', '');
            commit('setEmail', '');
            commit('setName', '');

            return Promise.resolve();
        }
    }
};

export default auth;
// action is dispatched
// mutation is comitted
// state is changed using method