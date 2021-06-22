<template>
  <div class="art-img">
    <nuxt-link :to="{ path: 'modal'}" append>
      <img
        :srcset="src.thumbnail.srcSet"
        alt="Untitled 1"
      >
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ArtImg',
  props: {
    src: {
      type: Object,
      default: null
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

.art-img {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  width: 100%;

  a {
    cursor: zoom-in;
    max-height: 100%;
  }

  img {
    max-width: calc(100vw - 18rem);
    height: $art-height;
    object-fit: contain;
  }

  &:hover {
    cursor: zoom-in;
  }
}

.art-modal {
  .vue-zoomer {
    overflow: initial;
    align-self: center;
    justify-self: center;

    img {
      cursor: move;
      max-height: 90vh;
      max-width: 100vw;
    }
  }

  &-controls-md {
    display: none;
  }
}

@include media-breakpoint-down(md) {
  .art-img {
    align-items: center;
    position: fixed;
    height: $art-height-md;

    img {
      max-width: 100vw;
      height: $art-height-md;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .expo-slide-art--modal-open {
    .art-img {
      position: inherit;
    }
  }
}
</style>
