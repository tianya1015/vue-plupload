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
        // 注入 Plupload
        this.Plupload = Plupload
      }
    }
    // 添加 component mixins 对象
    if (typeof component.mixins === 'array') {
      component.mixins.splice(0, 0, mixins)
    } else {
      component.mixins = [mixins]
    }
    // 注册标签
    Vue.component(tag, component)
  }
}