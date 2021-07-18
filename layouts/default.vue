<template>
  <div>
    <app-nav />
    <migas-de-pan />
    <nuxt />
  </div>
</template>

<script>
import AppNav from '../components/AppNav'
import MigasDePan from '../components/MigasDePan'

export default {
  components: {
    AppNav,
    MigasDePan
  }
}
</script>

<style>

</style>
