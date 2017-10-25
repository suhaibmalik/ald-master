<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import TopBar from "./components/TopBar.vue"
  export default {
    name: 'app',
    components: {
      TopBar
    }
  }
</script>

<style lang="sass">

  html, body
    margin: 0
    padding: 0
    border-radius: 8px
    overflow: hidden

  body
    font-size: 16px
    color: lightgrey
    font-family: sans-serif

  #app
    background-color: #222E34
    height: 100vh
    display: flex
    flex-direction: column

  #wrapper
    padding: 1em 2em

  @import "/bower_components/chartist/dist/chartist.min.css"

</style>
