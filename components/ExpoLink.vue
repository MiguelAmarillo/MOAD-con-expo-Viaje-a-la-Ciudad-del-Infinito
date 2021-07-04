<template>
  <div :class="{'expo' : true, 'expo-unavailable' : !exposition.hasOwnProperty('expo')}">
    <nuxt-link class="expo-link container" :to="urlToRedirec" :event="exposition.hasOwnProperty('url') ? 'click' : ''">
      <img v-if="exposition.hasOwnProperty('img')" :srcset="exposition.img.srcSet" alt="Untitled 1">
      <div v-else class="no-img-placeholder" />
      <div class="expo-link-hall">
        Sala {{ number }}
      </div>
      <h2 class="expo-link-title">
        {{ exposition.title }}
      </h2>
      <p class="expo-link-description">
        {{ exposition.description }}
      </p>
      <span :class="['expo-number', number % 2 === 0 ? 'expo-number-right' : 'expo-number-left']">0{{ number }}</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ExpoLink',
  props: {
    exposition: {
      type: Object,
      default: null
    },
    number: {
      type: Number,
      default: 0
    }
  },
  computed: {
    urlToRedirec () {
      return this.exposition.id === 'viajeinfinito' ? '/viajeinfinito' : '/expositions/' + this.exposition.id
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';
.expo-link {
  display: block;
  margin-bottom: 3rem;
  color: $body-color;
  position: relative;

  &:focus {
    img {
      border: 4px solid $primary;
      border-radius: 3px;
    }

    .expo-link-title {
      color: $primary;
    }
  }

  img, .no-img-placeholder {
    object-fit: cover;
    height: 450px;
    width: 100%;
  }

  .no-img-placeholder {
    background: $gray-light;
  }

  &-title {
    display: block;
    transition: .25s ease-in-out;

    &::after {
      content: '→';
      transition: .25s ease-in-out;
      padding-left: .25rem;
      text-decoration: none;
      display: inline-block;
    }
  }

  &:hover, &:focus {
    text-decoration: none;

    .expo-link-title {
      color: $primary;

      &::after {
        color: $primary;
        text-decoration: none;
        transform: translateX(.3rem);
      }
    }
  }

  &-hall {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: $gray;
  }
}

.expo {
  max-width: 100vw;
  position: relative;
  overflow: hidden;

  &-number {
    pointer-events: none;
    display: block;
    opacity: .95;
    position: absolute;
    font-family: soulcraft;
    mix-blend-mode: multiply;
    z-index: 10;
    color: $primary;
    font-size: 20rem;
    font-weight: bold;
    transform: rotate(-90deg);

    &-left {
      left: -5rem;
      bottom: 4rem;
    }

    &-right {
      right: -8rem;
      bottom: 0;
    }
  }
}

.expo-unavailable {
  .expo-link {
    cursor: default;

    &-title {
      color: $gray;
    }

    &:hover, &:focus {
    text-decoration: none;

    .expo-link-title {
      color: $gray;

      &::after {
        color: $gray;
        text-decoration: none;
        transform: translateX(0);
      }
    }
    }
  }
}

@include media-breakpoint-down(lg) {
  .expo {
    &-number {
      font-size: 17rem;

      &-left {
        left: -5rem;
        bottom: 1rem;
      }

      &-right {
        right: -6rem;
      }
    }
  }
}

@include media-breakpoint-down(md) {
  .expo {
    &-number {
      font-size: 14rem;

    &-left, &-right {
      left: initial;
      bottom: -1rem;
      right: -5rem;
    }
  }

  &-link {
      img, .no-img-placeholder {
        height: 375px;
      }
    }
  }
}

@include media-breakpoint-down(sm) {
    .expo {
      &-link-title {
        font-size: 1.75rem;
    }
  }
}
</style>
