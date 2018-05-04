import Vue from 'vue'
import Vuex from 'vuex'
import slider from './modules/slider'
import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    slider
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
