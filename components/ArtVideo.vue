<template>
  <div class="art-src">
    <video controls>
      <source :src="src" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
  </div>
</template>

<script>
export default {
  name: 'ArtVideo',
  props: {
    src: {
      type: String,
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

.art-src {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  width: 100%;

  video {
    max-width: calc(100vw - 18rem);
    height: $art-height;
    object-fit: contain;
  }
}

@include media-breakpoint-down(md) {
  .art-src {
    align-items: center;
    position: fixed;

    video {
      height: auto;
      max-width: 100vw;
    }

    &:hover {
      cursor: pointer;
    }
  }
}

</style>
