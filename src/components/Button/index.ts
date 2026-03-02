import type { App } from 'vue'
import ScvButton from './ScvButton.vue'

ScvButton.install = (app: App) => {
  app.component('ScvButton', ScvButton)
}

export default ScvButton