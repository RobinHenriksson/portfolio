<template>
  <div class="home-wrapper">
    <div class="wrapper header-wrapper">
      <HeaderContainer />
    </div>
    <div class="wrapper linkedin-wrapper">
      <LinkedinContainer />
    </div>
    <div class="wrapper education-wrapper">
      <EducationContainer />
    </div>
    <div class="wrapper experience-wrapper">
      <ExperienceContainer />
    </div>
    <div class="wrapper skills-wrapper">
      <SkillsContainer />
    </div>
    <div class="wrapper gallery-wrapper">
      <GalleryContainer />
    </div>
    <div class="wrapper contact-wrapper">
      <ContactContainer />
    </div>
  </div>
</template>
<script>

import HeaderContainer from '@/modules/header/'
import LinkedinContainer from '@/modules/linkedin/'
import EducationContainer from '@/modules/education/'
import ExperienceContainer from '@/modules/experience/'
import SkillsContainer from '@/modules/skills/'
import GalleryContainer from '@/modules/gallery/'
import ContactContainer from '@/modules/contact/'

export default {
  name: 'Home',
  components: {
    HeaderContainer,
    LinkedinContainer,
    EducationContainer,
    ExperienceContainer,
    SkillsContainer,
    GalleryContainer,
    ContactContainer
  }
}
</script>

<style lang="scss">
.wrapper {
  @apply flex;
  @apply w-full;
}
</style>
