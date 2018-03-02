import { store } from '../store'

export default (to, from, next) => {
  if (store.getters.user) {
    next()            /* next means continue with what you planned */
  } else {
    next('/signin')
  }
}
