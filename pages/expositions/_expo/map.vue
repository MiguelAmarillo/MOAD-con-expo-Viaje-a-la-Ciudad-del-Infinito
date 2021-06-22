<template>
  <div class="map-wrapper">
    <h4>Mapa</h4>
    <h2 class="mb-4">
      {{ currentExpoName }}
    </h2>
    <ul class="expo-map">
      <li v-for="(art, i) in expo" :key="i" :class="{'expo-map-item': true, 'expo-map-item-selected': i === currentSlide}">
        <button v-if="art.hasOwnProperty('src')" class="button-def" @click="goToSlide(i)" @mousedown.prevent>
          <img v-if="art.src.hasOwnProperty('thumbnail')" :src="art.src.thumbnail" :alt="art.title">
          <div v-else class="expo-map-item-no-thumbnail">
            <i class="las la-file-audio" />
          </div>
          <div class="expo-map-item-title">
            {{ art.title }}
          </div>
          <div class="expo-map-item-author">
            {{ art.author }}
          </div>
          <div v-if="i === currentSlide.number" class="expo-map-item-selected">
            <i class="las la-map-marker" /> Estàs ací
          </div>
        </button>
        <button v-else class="button-def expo-map-item-custom" @click="goToSlide(i)" @mousedown.prevent>
          <div class="expo-map-item-custom-title">
            {{ art.title }}
          </div>
          <div class="expo-map-item-custom-excerpt">
            {{ art.description.substring(0,100) }}[...]
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import expositions from '@/assets/expositions.js'

export default {
  asyncData ({ params, store }) {
    if (params.expo) {
      const expo = expositions[expositions.findIndex(expo => expo.id === params.expo)].expo

      return {
        expo
      }
    }
  },
  computed: {
    currentSlide () {
      return this.$store.state.currentSlide
    },
    currentExpoName () {
      return this.$store.state.currentExpoName
    }
  },
  methods: {
    goToSlide (i) {
      this.$router.push(`${this.expo[i].id}`)
    }
  },
  transition: {
    name: 'index',
    mode: 'out-in'
  }
}
</script>

<style lang="scss" scoped>
@import '../../../sass/variables';

.map-wrapper {
  width: 100%;
  padding: 0 8rem;
  margin-bottom: 2rem;
}

.expo-map {
  display: grid;
  grid-template-columns: repeat( auto-fit, 250px);
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.expo-map-item {
  button {
    width: 100%;
  }

  img {
    background: $gray-light;
    object-fit: cover;
    height: 250px;
    width: 250px;
  }

  a {
    text-decoration: none;
    color: $dark;
  }

  &-title {
    font-size: 1.2rem;
    margin: 1rem 0 0.25rem 0;
    text-align: left;
  }

  &-author {
    text-align: left;
  }

  &-custom {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    height: 250px;
    width: 250px;
    border: 2px solid $dark;

    &-title {
      font-size: 1.75rem;
      line-height: 1.2;
      margin-bottom: .5rem;
    }

    &-excerpt {
      font-size: .9rem;
      line-height: 1.4;
      color: $gray;
    }
  }

  &-selected {
    text-align: left;
    color: blue;

    .expo-map-item-title, .expo-map-item-author {
      color: blue;
    }
  }

  &-no-thumbnail {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    background: $gray;
    color: $white;
    height: 250px;
    width: 250px;
  }
}

@include media-breakpoint-down(md) {
  .map-wrapper {
    padding: 0 1rem;
  }
}

@include media-breakpoint-down(sm) {
  .expo-map {
    grid-template-columns: 1fr;

    &-item {
      img {
        width: 100%;
      }

      &-custom, &-no-thumbnail {
        width: 100%;
      }
    }
  }
}
</style>
