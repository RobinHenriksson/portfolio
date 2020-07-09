import { RepositoryFactory } from '@/api/repositoryFactory'
const repository = RepositoryFactory.get('skills')

export default {
  state: {
    list: null
  },
  getters: {
    list (state) {
      return state.list
    }
  },
  mutations: {
    SET_LIST (state, list) {
      state.list = [...list]
    }
  },
  actions: {
    async getList ({ commit }) {
      const list = await repository.getSkills()
      commit('SET_LIST', list.data)
    }
  },
  namespaced: true
}
