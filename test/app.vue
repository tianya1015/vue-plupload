<template>
  <div class="mod-app">
    <VuePlupload @PostInit="PostInit" @Browse="onBrowse"></VuePlupload>
  </div>
</template>

<script>  
  // import componentTest from '../src/index.vue'
  // import componentTest from '../src/index.js'
  // import componentTest from '../dist/index.min.js'
  export default {
    name: 'app',
    data () {
      return {}
    },
    methods: {
      onBrowse (up) {
        console.log('onBrowse')
      },
      PostInit () {
        console.log('asdfghjkl')
      }
    }
  }
</script>

<style>
  .mod-app {
    margin: 64px auto;
    padding: 32px;
    width: 1184px;
    min-height: 320px;
    background: #fcfcfc;
  }
</style>
