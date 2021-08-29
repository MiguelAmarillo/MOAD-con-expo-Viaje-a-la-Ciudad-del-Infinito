<template>
  <div class="viajeinfinito">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-4 withoutPaddings cuadrado1">
        <nuxt-link class="expo-link container" to="/biografias">
              <picture>
              <source srcset="~/assets/art/expo-vicente/Portada/biografiasmovil.jpg" media="(max-width:776px)">
              <img src="~/assets/art/expo-vicente/Portada/biografias.jpg" class="img-fluid fill" style="width: 100%; height: 100%;" alt="Responsive image">
              </picture>
        </nuxt-link>
      </div>
      <div class="col-sm-12 col-md-4 withoutPaddings">
        <nuxt-link class="expo-link container" to="/tuneldeltiempo">
              <picture>
              <source srcset="~/assets/art/expo-vicente/Portada/tuneltiempomovil.jpg" media="(max-width:776px)">
              <img src="~/assets/art/expo-vicente/Portada/tuneltiempo.jpg" class="img-fluid fill" style="width: 100%; height: 100%;" alt="Responsive image">
              </picture>
        </nuxt-link>
      </div>
      <div class="col-sm-12 col-md-4 withoutPaddings">
        <nuxt-link class="expo-link container" to="/expositions/viajeinfinito">
              <picture>
              <source srcset="~/assets/art/expo-vicente/Portada/proyectosmovil.jpg" media="(max-width:776px)">
              <img src="~/assets/art/expo-vicente/Portada/proyectos.jpg" class="img-fluid fill" style="width: 100%; height: 100%;" alt="Responsive image">
              </picture>
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
    this.$store.commit('changeZone','viajeinfinito')

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
  margin: 6rem 2rem;
  position: center;
}

.withoutPaddings {
  padding: 0;
}


img {
    opacity: 50%;
    margin: 0;
}

img:hover {
    opacity: 100%;
}

@media screen and (max-width: 776px) {
    img {
        opacity: 100%;
    };
    .row {
        margin: 2rem 2rem;
    }
}

</style>
