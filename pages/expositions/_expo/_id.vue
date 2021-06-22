<template>
  <div>
    <expo-slide :slide="currentExpoSlide" />
    <nuxt-child :src="currentExpoSlide.src" />
  </div>
</template>

<script>
import ExpoSlide from '@/components/ExpoSlide'
import expositions from '@/assets/expositions.js'

export default {
  components: {
    ExpoSlide
  },

  asyncData ({ params, store }) {
    if (params.expo) {
      const expo = expositions[expositions.findIndex(expo => expo.id === params.expo)].expo
      const slide = (!params.id) ? expo[0] : expo.find(slide => slide.id === params.id)

      return {
        currentExpoSlide: slide
      }
    }
  }
}
</script>

<style lang="scss">
</style>
