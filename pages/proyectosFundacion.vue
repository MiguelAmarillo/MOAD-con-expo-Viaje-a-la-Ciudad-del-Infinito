<template>
  <div class="viajeinfinito">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-3 withoutPaddings">
        <nuxt-link class="expo-link container" to="/expositions/ecologia">
              <picture>
              <source srcset="~/assets/art/expo-vicente/Proyectos/ecologiamovil.jpg" media="(max-width:776px)">
              <img src="~/assets/art/expo-vicente/Proyectos/ecologia.jpg" class="img-fluid fill" style="width: 100%; height: 100%;" alt="Responsive image">
              </picture>
        </nuxt-link>
      </div>
      <div class="col-sm-12 col-md-3 withoutPaddings">
        <nuxt-link class="expo-link container" to="/expositions/educacion">
              <picture>
              <source srcset="~/assets/art/expo-vicente/Proyectos/educacionmovil.jpg" media="(max-width:776px)">
              <img src="~/assets/art/expo-vicente/Proyectos/educacion.jpg" class="img-fluid fill" style="width: 100%; height: 100%;" alt="Responsive image">
              </picture>
        </nuxt-link>
      </div>

      <div class="col-sm-12 col-md-3 withoutPaddings">
        <nuxt-link class="expo-link container" to="/expositions/feminismo">
              <picture>
              <source srcset="~/assets/art/expo-vicente/Proyectos/feminismomovil.jpg" media="(max-width:776px)">
              <img src="~/assets/art/expo-vicente/Proyectos/feminismo.jpg" class="img-fluid fill" style="width: 100%; height: 100%;" alt="Responsive image">
              </picture>
        </nuxt-link>
      </div>
      <div class="col-sm-12 col-md-3 withoutPaddings">
        <nuxt-link class="expo-link container" to="/expositions/deporte">
              <picture>
              <source srcset="~/assets/art/expo-vicente/Proyectos/deportemovil.jpg" media="(max-width:776px)">
              <img src="~/assets/art/expo-vicente/Proyectos/deporte.jpg" class="img-fluid fill" style="width: 100%; height: 100%;" alt="Responsive image">
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
      currentUrl: ''
    }
  },
  computed: {
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

img {
    opacity: 70%;
}

img:hover {
    opacity: 100%;
}

.row {
  height: 35rem;
  margin: 4rem 2rem;
  position: center;
}



</style>
