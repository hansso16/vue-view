import axios from 'axios'
import router from '../../routes/routes'

const state = {
    token: null,
    expiresIn: null,
    priviledge: 'ADMIN'
}

const mutations = {
    authUser(state, authData) {
        state.token = authData.token
        state.expiresIn = authData.expiresIn
    },
    storeUser(state, user) {
        state.user = user;
    },
    logout(state) {
        state.token = null;
        state.expiresIn = null;
    }
}

const actions = {
    login({commit, dispatch}, authData) {
        commit('authUser', authData)
    },
    setLogoutTimer({commit, dispatch}, expirationTime) {
        setTimeout(() => {
            if (!Vue.cookie.get('authToken')) {
                dispatch('logout')
            }
        }, expirationTime);
    },
    logout({commit}) {
        commit('logout');
        axios.get('/api/logout').then(res => {
            router.replace('/');
        })
    }
}

const getters = {
    isAuthenticated(state) {
        return state.token !== null
    },
    expiresIn(state) {
        return state.expiresIn
    },
    priviledge(state) {
        return state.priviledge
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
