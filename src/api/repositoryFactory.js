import experienceRepository from './real/experience'
import educationRepository from './real/education'
import profileRepository from './real/profile'
import skillsRepository from './real/skills'

const repositories = {
  experience: experienceRepository,
  education: educationRepository,
  profile: profileRepository,
  skills: skillsRepository
}

export const RepositoryFactory = {
  get: (name) => repositories[name]
}

export default RepositoryFactory
