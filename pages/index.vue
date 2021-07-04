<template>
  <div>
    <moad-welcome />
    <div class="container">
      <h1 id="expositions" class="title">
        Exposicions
      </h1>
    </div>
    <div class="expositions">
      <expo-link v-for="(exposition, i) in expositions" :key="i" :exposition="exposition" :number="i + 1" />
    </div>
  </div>
</template>

<script>
import expositions from '../assets/expositions.js'
import ExpoLink from '../components/ExpoLink'
import MoadWelcome from '../components/MoadWelcome'

export default {
  components: {
    ExpoLink,
    MoadWelcome
  },

  transition: {
    name: 'index',
    mode: 'out-in'
  },
  head () {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: `/${this.$store.state.styles}.css`
        }
      ]
    }
  },
  data () {
    return {
      expositions
    }
  },

  beforeCreate () {
    this.$store.commit('resetExpo')
  },

  layout: 'default-footer'
}
</script>

<!-- controlar css de las exposiciones en el inicio

<style lang="scss" scoped>
.expositions {
 background-color: black;
}
</style>

-->
