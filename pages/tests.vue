<template>
  <div class="wrapper">
    <div class="grid">
      <div class="item-1" />
      <div class="item-2" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Art3d',

  data () {
    return {
      enablePan: false,
      enableZoom: false,
      enableRotate: false,
      loading: false
    }
  },
  computed: {
    showModal () {
      return this.$store.state.showModal
    }
  },
  methods: {
    toggleModal () {
      this.$store.commit('toggleModal')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.wrapper {
  height: 800px;
  width: 300px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 300px 1fr;
}

.item-1 {
  background: red;
  height: 100%;
}

.item-2 {
  background: blue;
  height: 100%;
}

</style>
