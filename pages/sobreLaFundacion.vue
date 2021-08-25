<template>
  <div class="viajeinfinito justify-content-center " >
    <div class="box" style="margin:10px position:center">
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </p>
    </div>
    <div class="box" style="margin:10px position:center">
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </p>
      </div>
    <div class="justify-content-center">
      <div class="col-12 col-md-3 withoutPaddings" style="margin: 40px 0px 0px 20px">
        <a href="https://fundacionvicenteferrer.org/es/donar"  target="_blank">
        <b-button class="btn">Dona a la fundación</b-button>
        </a>
      </div>
      <div class="col-12 col-md-3 withoutPaddings" style="margin: 15px 0px 0px 20px">
        <nuxt-link class="expo-link-migas" to="/viajeinfinito">
          <b-button class="btn">Volver a la exposión</b-button>
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
    }  },
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
  layout: 'default-footer'
}
</script>

<style lang="scss" scoped>

.btn {
background-color: #E55C17;
}

.viajeinfinito {
  background-color: #3C3C3B;
  color: white;
}

.row {
  margin: 0 3rem
}
.withoutPaddings {
  padding: 0px;
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  margin: 0px 20px 0px 20px;
}

</style>
