
This is a vue coding example for website https://robinhenriksson.se


## Project structure
* All components shall be imported with Pascal Case like `<ProfileContainer />` or `<BlueSquare />`
* Smart/dumb components structure.
   * Smart component(s) handle all buisness logic.
      * Handles all vuex store communication.
      * Smart components are created in the `src/modules` folder and are imported in views with a `'Container'` suffix.
   * Dumb component(s) are used for data rendering.
      * Accepts props only.
      * Emits all events to smart component.
      * Uses Tailwind css classes as long as possible
      * Sass shall be scoped as long as possible, otherwise wrapped in a specific class.
   * Views  are used to import and position components to create a page
      * Only accept smart components
      * shall be created in views folder
* API-calls are made through vuex actions
   * Vuex: each API call goes through a `RepositoryFactory`, i.e. `const repository = RepositoryFactory.get('experience')` looks like this in its vuex action:
   ```
   import { RepositoryFactory } from '@/api/repositoryFactory';
   const repository = RepositoryFactory.get('experience');
   const experience = await repository.getExperiences();
   ```
   * In `RepositoryFactory` you choose to use a `real` or a `mock` API.
   * If Backend is not ready, create a mock api call and connect that to develop further.