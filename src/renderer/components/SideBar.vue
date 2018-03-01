<template>
  <div class="SideBar">
    <nav class="Nav">
      <div class="Nav__header">Main</div>
      <router-link tag="div" class="Nav__item" to="/">Dashboard</router-link>
      <router-link tag="div" class="Nav__item" to="/manual-control">Manual Control</router-link>

      <div class="Nav__header">Experiments</div>
      <div class="Nav__item">Saved Growths</div>
      <div class="Nav__item">ALD Wizard</div>
      <div class="Nav__item">Bakeout</div>

      <div class="Nav__header">Other</div>
      <div class="Nav__item">Wiki</div>
      <div class="Nav__item">Troubleshoot</div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'side-bar'
  }
</script>

<style lang="sass">

  .SideBar
    background-color: #24262d
    flex: 0 0 230px
    font-size: .95em
    color: #848c94

  .Nav
    background-color: #2a2d35
    padding: 1.5em 0

    /*&__header, &__item*/

    &__header
      padding: 1.5em 0 .75em
      font-weight: bold
      color: white
      margin-left: 1.25em

    &__item
      cursor: pointer
      padding: .65em 1em
      border-left: .35em solid transparent
      /*padding-left: 1em*/

      &:hover
        color: #c0c4c8

    .router-link-exact-active
       color: #c0c4c8
       border-color: #f6a821

</style>
