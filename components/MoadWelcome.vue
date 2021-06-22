<template>
  <div class="container welcome">
    <h1 class="welcome-text">
      Benvinguts al Museu Online d'Art Digital
    </h1>
    <p>Som una institució lliure, oberta i gratuïta que exposa, estudia i conserva art digital. Acabem de nàixer, estem en proves!</p>
    <div class="links">
      <a class="link-arrow" href="#expositions">
        Exposicions
      </a>
      <nuxt-link class="link-arrow" to="manifest">
        Sobre nosaltres
      </nuxt-link>
      <nuxt-link class="link-arrow" to="participa">
        Participa al museu
      </nuxt-link>
    </div>
    <!-- <client-only>
      <Lottie
        class-name="scroll-icon"
        renderer="svg"
        :loop="true"
        :autoplay="true"
        :animation-data="scrollIcon"
        stroke="blue"
      />
    </client-only> -->
  </div>
</template>

<script>
// import Lottie from 'vue-lottie-web'
import scrollIcon from '../assets/icons/scroll-down.json'

export default {
  name: 'MoadWelcome',

  components: {
    // Lottie
  },

  data () {
    return {
      scrollIcon
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.welcome {
  margin-bottom: 6rem;

  &-text {
    color: $dark;
    line-height: 1.1;
    padding: 4rem 0 1rem 0;
    max-width: 850px;
    margin: 0;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
  }

  .links {
    font-size: 1.75rem;

    a {
      display: inline-block;
      margin-right: 1.25rem;
    }
  }
}

@include media-breakpoint-down (md) {
  .welcome {
    &-text {
      font-size: 3.25rem;
    }
  }
}

@include media-breakpoint-down(sm) {
  .welcome {
    margin-bottom: 2.5rem;

    &-text {
      font-size: 2.5rem;
      padding: .75rem 0;
    }

    .links {
      font-size: 1.25rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
}
</style>

<style lang="scss" >
.welcome {
  .scroll-icon {
    path {
      stroke: blue;
    }
  }
}
</style>
