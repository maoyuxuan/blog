import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      example
    }
  })

  if (process.env.DEV && module.hot) {
    module.hot.accept(['./module-example'], () => {
      const newExample = require('./module-example').default
      Store.hotUpdate({ modules: { example: newExample } })
    })
  }
  return Store
}
