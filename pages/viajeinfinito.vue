<template>
  <div class="viajeinfinito">
    <div class="row">
      <div class="col-sm-12 col-md-4">md-4</div>
      <div class="col-sm-12 col-md-4">md-4</div>
      <div class="col-sm-12 col-md-4">md-4</div>
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
  },
  layout: 'default'
}
</script>

<style lang="scss" scoped>

.viajeinfinito {
background-color: blue;
}

.row {
  height: 20em;
  margin: 0 2rem
}

</style>
