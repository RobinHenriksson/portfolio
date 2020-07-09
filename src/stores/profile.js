import { RepositoryFactory } from '@/api/repositoryFactory'
const repository = RepositoryFactory.get('profile')

export default {
  state: {
    profile: {
      name: '',
      profession: '',
      skills: ''
    }
  },
  getters: {
    get (state) {
      return state.profile
    }
  },
  mutations: {
    SET_PROFILE (state, profile) {
      state.profile = profile
    }
  },
  actions: {
    async getProfile ({ commit }) {
      const profile = await repository.getProfile()
      commit('SET_PROFILE', profile.data)
    }
  },
  namespaced: true
}
