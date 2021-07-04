<template>
  <div class="expo-nav">
    <nuxt-link id="progress-bar" class="expo-nav-progress button-def" :style="progressBarLength" to="map" @mousedown.prevent />
    <b-tooltip target="progress-bar" triggers="hover focus" offset="10000px" custom-class="tooltip-moad">
      Obrir Mapa
    </b-tooltip>
    <button v-if="showControls && prevSlideExists" class="expo-nav-prev button" @click.prevent="prevSlide()" @mousedown.prevent>
      <span>←</span>
    </button>
    <nuxt-link v-if="showControls && currentSlide.number > 0" class="expo-nav-map d-lg-none d-xl-none button-def" to="map" @mousedown.prevent>
      Mapa
    </nuxt-link>
    <button v-if="showControls && nextSlideExists" class="expo-nav-next button" to="aerial-trams" @click.prevent="nextSlide()" @mousedown.prevent>
      <span>→</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    expo: {
      type: Array,
      default: null
    },
    showControls: {
      type: Boolean,
      default: true
    }
  },
  head () {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: `/${this.$store.state.styles}.css`
        }
      ]
    }
  },
  computed: {
    currentSlide () {
      return this.$store.state.currentSlide
    },
    slideinfinito () {
      console.log(this.$store.state)
      return this.$store.state.currentExpoId
    },
    progressBarLength () {
      return 'width:' + ((this.currentSlide.number) / this.expoLength) * 100 + '%'
    },
    showMap () {
      return this.$store.state.showMap
    },
    expoLength () {
      return this.expo.length
    },
    nextSlideExists () {
      return this.expoLength > (this.currentSlide.number + 1)
    },
    prevSlideExists () {
      return (this.currentSlide.number - 1) >= 0
    }
  },
  methods: {
    nextSlide () {
      if (this.nextSlideExists) {
        if (this.$route.params.id) {
          this.$router.push(this.expo[this.currentSlide.number + 1].id)
        } else {
          this.$router.push({ path: `${this.expo[this.currentSlide.number + 1].id}`, append: true })
        }
      }
    },
    prevSlide () {
      if (this.prevSlideExists) {
        this.$router.push(this.expo[this.currentSlide.number - 1].id)
      }
    }
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.expo-nav {
  &-progress {
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 4px solid $primary;
    transition: .25s ease-out;

    &:hover {
      border-top: 8px solid $primary;
      cursor: pointer;
    }
  }

  &-next, &-prev {
    position: fixed;
    font-size: 3rem;
    bottom: 45vh;

    span {
      display: block;
    }

    &:hover {
      transition: .2s ease-in-out;
      transform: translateX(.2rem);
      color: $primary;
    }
  }

  &-next {
    right: 2.25rem;

    &:hover {
      span {
        /* animation-name: slide-fade-right;
        animation-duration: 1.25s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards; */
      }
    }
  }

  &-prev {
    left: 2.25rem;

    &:hover {
      span {
        /* animation-name: slide-fade-left;
        animation-duration: 1.25s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards; */
      }
    }
  }
}

@include media-breakpoint-down(md) {
  .expo-nav {
    position: fixed;
    bottom: 0;
    background-color: $light;
    z-index: 100;
    height: 4.25rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &-next, &-prev {
      font-size: 2.35rem;
      bottom: 10px;

      &:hover {
        transform: translateX(0);
        color: $dark;
      }
    }

    &-next {
    right: 0.5rem;
    }

    &-prev {
    left: 0.5rem;
    }
  }
}

@keyframes slide-fade-right {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    30% {
      transform: translateX(20px);
      opacity: 0;
    }
    31% {
      transform: translateX(-20px);
      opacity: 0;
    }
  }

  @keyframes slide-fade-left {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    44% {
      transform: translateX(-20px);
      opacity: 0;
    }
    45% {
      transform: translateX(20px);
      opacity: 0;
    }
  }
</style>
