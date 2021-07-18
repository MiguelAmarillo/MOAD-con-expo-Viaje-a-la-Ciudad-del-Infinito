<template>
  <div class="row justify-content-center migas-container" >
    Proyectos fundación

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

<style>

</style>
