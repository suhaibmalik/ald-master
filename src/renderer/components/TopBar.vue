<template>
  <div class="TopBar">
    <div class="TopBar__app-ver">
      <div class="TopBar__app">ALD Master</div>
      <div class="TopBar__ver">v0.8</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'top-bar'
  }
</script>

<style lang="sass">
  .TopBar
    display: flex
    flex-direction: row
    background-color: white
    -webkit-app-region: drag
    flex: 0 0 65px

    &__app-ver
      font-family: Roboto, sans-serif
      width: 230px
      background: #f6a821
      color: white
      display: flex
      flex-direction: row
      align-items: center
      padding: 1.25em 0

    &__app
      margin-left: 1.25em
      flex-grow: 1
      font-size: 1.25em
      letter-spacing: 3px

    &__ver
      margin-right: 1.25em
      font-size: .8em
      color: rgba(255,255,255,.8)


</style>
