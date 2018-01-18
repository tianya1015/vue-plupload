<template>
  <div :class="elClass" :style="elStyle">
    <slot></slot>
  </div>
</template>

<script>
  import {ListOptionOfPlupload, ListMethodOfPlupload, ListEventOfPlupload} from './data'
  const forEach = (l, fn) => {
    for (let i = 0; i < l.length; i++) {
      fn && fn(l[i], i)
    }
  }
  // vue props 对象
  const props = {
    elClass: {
      type: [String, Object],
      default: 'component-plupload'
    },
    elStyle: {
      type: [String, Object]
    },
  }
  // vue methods 对象
  const methods = {
    __creatPluploadInstance () {
      /* 实例化 plupload */
      if (this.Plupload) {
        this.PluploadInstance = new this.Plupload.Uploader(this.__getPluploadConfig())
        this.init()
      } else {
        throw new Error('Please pass in "Plupload", at use "Vue.use"')
      }
      /* 实例化 plupload end */
    },
    __getPluploadConfig (opts) {
      let self = this
      let tmpMap = {
        // 设置 Plupload init 配置
        init: self.__getPluploadConfigInit()
      }
      // 通过 props 属性 设置 Plupload 配置
      forEach(ListOptionOfPlupload, (item) => {
        let self = this
        let key = item.key
        switch (key) {
          case 'browse_button':
            tmpMap.browse_button = self.$el
            break
          default: {
            self[key] && (tmpMap[key] = self[key])
          }
        }
      })
      return tmpMap
    },
    // Plupload 方法构建
    __creatPluploadMethodFn (key) {
      return function () {
        this.PluploadInstance[key].apply(this.PluploadInstance, arguments)
      }
    },
    // Plupload 事件回调方法构建
    __creatPluploadEventFn (key) {
      return function () {
        let arg = Array.prototype.slice.call(arguments)
        arg.splice(0, 0, key)
        this.$emit.apply(this, arg)
      }.bind(this)
    },
    // 获取 Plupload init Config(事件的绑定)
    __getPluploadConfigInit () {
      let self = this
      let tmpMap = {}
      // Plupload init 配置 循环构建
      forEach(ListEventOfPlupload, (item) => {
        tmpMap[item] = self.__creatPluploadEventFn(item)
      })
      return tmpMap
    }
  }
  // 动态添加 props
  forEach(ListOptionOfPlupload, (item) => {
    switch (item.key) {
      case 'browse_button':
        break
      default: {
        props[item.key] = {
          type: item.type,
          default: item.default
        }
      }
    }
  })
  // 动态添加 method
  forEach(ListMethodOfPlupload, (item) => {
    methods[item] = methods.__creatPluploadMethodFn(item)
  })
  
  export default {
    name: 'VuePlupload',
    props,
    data () {
      return {
        /** Plupload 组件对象 外部传入 */
        Plupload: null,
        /* Plupload 实例对象 */
        PluploadInstance: null
      }
    },
    mounted () {
      // 创建 Plupload 实例
      this.__creatPluploadInstance()
    },
    methods,
    beforeDestroy () {
      // 销毁 plupload 
      this.destroy()
    }
  }
</script>

<style>
.component-test {
  color: #f60;
}
</style>
