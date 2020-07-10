import experienceRepository from './real/experience'
import educationRepository from './real/education'
import profileRepository from './real/profile'
import skillsRepository from './real/skills'
import contactRepository from './real/contact'

const repositories = {
  experience: experienceRepository,
  education: educationRepository,
  profile: profileRepository,
  skills: skillsRepository,
  contact: contactRepository
}

export const RepositoryFactory = {
  get: (name) => repositories[name]
}

export default RepositoryFactory
