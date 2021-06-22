<template>
  <div class="art-3d">
    <div v-if="showModal" class="art-modal">
      <div class="model-wrapper-modal">
        <model-obj
          :src="src"
        />
      </div>
      <!-- <ul class="art-modal-controls-lg">
        <li><i class="las la-search-plus" /> Roda del ratolí</li>
        <li><i class="las la-undo-alt" /> Click + moure</li>
        <li><i class="las la-arrows-alt" /> Espai + moure</li>
      </ul> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'Art3d',

  props: {
    src: {
      type: String,
      default: null
    }
  },
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
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

.art-3d {
  height: 100%;
  width: 100%;
}

.model-wrapper {
  width: 100%;
  height: $art-height;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &-modal {
    width: 100%;
    height: 100vh;
  }
}

.loading-icon {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 3rem;
  height: 3rem;
}

.art-src {
  height: 100%;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
}

@include media-breakpoint-down(md) {
  .art-3d {
    .model-wrapper {
      position: fixed;
    }
  }

  .art-src {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
