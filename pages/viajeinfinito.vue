<template>
  <div class="viajeinfinito">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-4 withoutPaddings">
        <nuxt-link class="expo-link container" to="/biografias">
              <img src="~/assets/appImages/viajeInfinito/imgBiografias.jpeg" class="img-fluid fill" style="width: 100%; height: 100%;" alt="Responsive image">
        </nuxt-link>
      </div>
      <div class="col-sm-12 col-md-4 withoutPaddings">
        <nuxt-link class="expo-link container" to="/expositions/viajeinfinito">
              <img src="~/assets/appImages/viajeInfinito/imgCronograma.jpeg" class="img-fluid fill" style="width: 100%; height: 100%;" alt="Responsive image">
        </nuxt-link>
      </div>
      <div class="col-sm-12 col-md-4 withoutPaddings">
        <nuxt-link class="expo-link container" to="/expositions/viajeinfinito">
              <img src="~/assets/appImages/viajeInfinito/imgProyectos.jpeg" class="img-fluid fill" style="width: 100%; height: 100%;" alt="Responsive image">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
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
      value: ''
    }
  },
  mounted () {
    this.$store.commit('changeStyleToInfinito', 'infinitosStyle')
    this.$store.commit('changeCurrentExpoId', 'viajeinfinito')
  },
  layout: 'default'
}
</script>

<style lang="scss" scoped>

.viajeinfinito {
  background-color: #3C3C3B;
}

.row {
  height: 30em;
  margin: 0 3rem
}
.withoutPaddings {
  padding: 0px;
}

</style>
