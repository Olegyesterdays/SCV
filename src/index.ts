import type { App } from 'vue'
import ScvButton from './components/Button'

export { ScvButton }

export default {
  install(app: App) {
    app.use(ScvButton)
  }
}