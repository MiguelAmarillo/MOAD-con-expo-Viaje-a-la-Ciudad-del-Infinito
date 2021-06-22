<template>
  <div class="art-src">
    <img v-if="showModal == false" :srcset="src.thumbnail.srcSet" alt="Untitled 1" @click="toggleModal()">
    <div v-if="showModal" class="art-html-modal" @click="toggleModal()">
      <iframe ref="iframe" :src="src.url" class="art-html" />
      <div v-if="showModal" class="art-html-controls" @click.stop>
        <button class="button button-sm" @click="$refs.iframe.contentWindow.history.back()">
          ←
        </button>
        <button class="button button-sm" @click="$refs.iframe.contentWindow.history.forward()">
          →
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtHtml',
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
@import '../../sass/variables';

.art-src {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  img {
    max-width: calc(100vw - 18rem);
    height: $art-height;
    object-fit: contain;
  }

  &:hover {
    cursor: pointer;
  }
}

.art-html-modal {
  width: 100%;

  .art-html {
    overflow-y: scroll;
    align-self: center;
    justify-self: center;
    height: 100vh;
    width: 100%;
  }

  .art-html-controls {
    background: white;
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

}

@include media-breakpoint-down(md) {
  .art-src {
    align-items: center;

  img {
    max-width: 100vw;
    position: fixed;
  }

  &:hover {
    cursor: pointer;
  }
}
}
</style>
