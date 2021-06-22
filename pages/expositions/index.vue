<template>
  <div class="expos">
    <nuxt-child :expositions="expositions" />
    <expo-link v-for="(exposition, i) in expositions" :key="i" :exposition="exposition" :number="i + 1" />
  </div>
</template>

<script>
import ExpoLink from '@/components/ExpoLink'
import expositions from '@/assets/expositions.js'

export default {
  components: {
    ExpoLink
  },
  data () {
    return {
      expositions
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
