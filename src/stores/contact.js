import { RepositoryFactory } from '@/api/repositoryFactory'
const repository = RepositoryFactory.get('contact')

export default {
  state: {
    status: 'INITIAL',
    loading: false
  },
  getters: {
    loading: state => state.loading,
    status: state => state.status
  },
  mutations: {
    LOADING (state, boolean) {
      state.loading = boolean
    },
    STATUS (state, boolean) {
      state.status = boolean
    }
  },
  actions: {
    async send ({ commit }, payload) {
      commit('STATUS', 'SENDING')
      commit('LOADING', true)
      try {
        await repository.send(payload)
        commit('STATUS', 'SENT')
        commit('LOADING', false)
      } catch (e) {
        commit('STATUS', 'ERROR')
        commit('LOADING', false)
      }
    }
  },
  namespaced: true
}
