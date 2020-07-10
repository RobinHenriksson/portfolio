import { RepositoryFactory } from '@/api/repositoryFactory'
const repository = RepositoryFactory.get('contact')

export default {
  state: {
    loading: false
  },
  getters: {
    loading: state => state.loading
  },
  mutations: {
    LOADING (state, boolean) {
      state.loading = boolean
    }
  },
  actions: {
    async send ({ commit }, payload) {
      commit('LOADING', true)
      try {
        await repository.send(payload)
        commit('LOADING', false)
      } catch (e) {
        commit('LOADING', false)
      }
    }
  },
  namespaced: true
}
