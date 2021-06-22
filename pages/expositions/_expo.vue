<template>
  <div>
    <div class="expo-wrapper">
      <nuxt-child />
    </div>
    <expo-nav v-if="!showMap && !showModal" :expo="currentExpo" />
  </div>
</template>

<script>
import ExpoNav from '@/components/ExpoNav'
import expositions from '@/assets/expositions.js'

export default {
  components: {
    ExpoNav
  },

  asyncData ({ store, params }) {
    if (params.id) {
      const currentExpo = expositions[expositions.findIndex(expo => expo.id === params.expo)].expo
      store.commit('changeCurrentSlide',
        {
          number: currentExpo.findIndex(slide => slide.id === params.id),
          id: params.id
        }
      )
    }

    if (params.expo) {
      store.commit('changeCurrentExpoId', params.expo)
      const i = (params.id) ? expositions.findIndex(expo => expo.id === params.expo) : 0
      store.commit('changeCurrentExpoName', expositions[i].title)
    }
  },

  computed: {
    currentSlide () {
      return this.$store.state.currentSlide
    },
    showMap () {
      return this.$store.state.showMap
    },
    route () {
      return this.$store.state.route.path
    },
    routeParams () {
      return this.$store.state.route.params
    },
    showModal () {
      return this.$store.state.showModal
    },
    currentExpo () {
      return expositions[expositions.findIndex(expo => expo.id === this.$route.params.expo)].expo
    }
  },
  watch: {
    // ho rep la nav (art i autor)
    currentSlide (newslide, oldslide) {
      this.$store.commit('changeCurrentArt', { art: this.currentExpo[this.currentSlide.number].title, author: this.currentExpo[this.currentSlide.number].author })
    },
    // saber si hi ha modals oberts
    route: {
      handler (from, to) {
        if (from.endsWith('modal')) {
          this.$store.commit('toggleModal', 'open')
        } else if (from.endsWith('map')) {
          this.$store.commit('toggleMap', 'open')
        } else {
          this.$store.commit('toggleModal', 'close')
          this.$store.commit('toggleMap', 'close')
        }
      },
      immediate: true,
      deep: true
    },

    routeParams: {
      handler (from, to) {
        const { params } = this.$route
        const currentExpo = expositions[expositions.findIndex(expo => expo.id === params.expo)].expo
        if (params.id) {
          this.$store.commit('changeCurrentSlide',
            {
              number: currentExpo.findIndex(slide => slide.id === params.id),
              id: params.id
            })
        }

        if (params.expo) {
          this.$store.commit('changeCurrentExpoId', params.expo)
          const i = expositions.findIndex(expo => expo.id === params.expo)
          this.$store.commit('changeCurrentExpoName', expositions[i].title)
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

.expo-wrapper {
  margin: 0 0 4rem 0;
}

@include media-breakpoint-down(md) {
  .expo-wrapper {
    height: 90vh;
    margin: 0;
  }
}

.expo-enter-active, .expo-leave-active {
  transition: .5s ease-out;
}

.expo-enter {
  opacity: 0;
  transform: scale(1.1);
}

.expo-leave-to {
  opacity: 0;
  transform: scale(1.9);
}
</style>
