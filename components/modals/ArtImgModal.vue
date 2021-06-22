<template>
  <div class="art-img" @click="toggleModal()">
    <v-zoomer ref="zoomer">
      <img
        :src="src.images[src.images.length-1].path"
        @click.stop
      >
    </v-zoomer>
    <div class="modal-controls-lg" @click.stop>
      <button class="button button-sm" @click="$refs.zoomer.zoomIn()">
        <i class="las la-search-plus" />
      </button>
      <button class="button button-sm" @click="$refs.zoomer.zoomOut()">
        <i class="las la-search-minus" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtImgModal',
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
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

.art-img {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  width: 100%;

  img {
    max-width: calc(100vw - 18rem);
    height: $art-height;
    object-fit: contain;
  }

  .vue-zoomer {
    overflow: initial;
    align-self: center;
    justify-self: center;
  }
}

@include media-breakpoint-down(md) {
  .art-img {
    align-items: center;
    position: fixed;

    img {
      max-width: 100vw;
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
