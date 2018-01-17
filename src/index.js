/*
 * @Author: xinyu.wang <xinyu.wang@wuage.com>
 * @Version: 0.0.1
 * @Date: 2017-12-11 21:06:16
 * @Last Modified by:   xinyu.wang
 * @Last Modified Time: 2017-12-11 21:06:16
 */

import component from './index.vue'
export default {
  install (Vue, opts = {}) {
    let {
      key = '$Plupload',
      tag = 'VuePlupload',
      Plupload
    } = opts
    let mixins = {
      created () {
        this.Plupload = Plupload
      }
    }
    if (typeof component.mixins === 'array') {
      component.mixins.splice(0, 0, mixins)
    } else {
      component.mixins = [mixins]
    }
    Vue.component(tag, component)
  }
}