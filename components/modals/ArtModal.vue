<template>
  <div class="art-modal-wrapper">
    <art-img-modal v-if="src.type === 'img'" :src="src.url" />
    <art-3d-modal v-if="src.type === '3d'" :src="src.url" />
    <art-html-modal v-if="src.type === 'html'" :src="src" />
  </div>
</template>

<script>
import ArtImgModal from './ArtImgModal'
import Art3dModal from './Art3dModal'
import ArtHtmlModal from './ArtHtmlModal'

export default {
  name: 'Art',
  components: {
    ArtImgModal,
    Art3dModal,
    ArtHtmlModal
  },
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
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

.art-modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: white;
  overflow: hidden;
  z-index: 100;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr;
}

</style>
