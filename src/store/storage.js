import { createStore } from "vuex";

// state, getters, mutations, actions, modules
export default createStore({
    state: {
        userid: -1,
        username: ''
    },
    getters: {
        getUserId(state) {
            return state.userid;
        },
        getUserName(state) {
            return state.username;
        }
    },
    mutations: {
        setUserId(state, value) {
            state.userid = value
        },
        setUserName(state, value) {
            state.username = value
        }
    },
});