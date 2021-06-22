<template>
  <art-modal :src="src" />
</template>

<script>
import ArtModal from '@/components/modals/ArtModal'

export default {
  components: {
    ArtModal
  },

  props: {
    src: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
