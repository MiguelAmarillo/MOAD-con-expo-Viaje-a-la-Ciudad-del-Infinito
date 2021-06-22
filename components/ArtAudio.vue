<template>
  <div class="art-src">
    <audio controls>
      <source :src="src" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
  name: 'ArtAudio',
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
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100%;
  width: 100%;
  max-width: 800px;

  audio {
    width: 100%;
    object-fit: contain;
  }
}

@include media-breakpoint-down(md) {
  .art-src {
    align-items: center;
    position: fixed;

    audio {
      max-width: 96vw;
    }

    &:hover {
      cursor: pointer;
    }
  }
}

</style>
