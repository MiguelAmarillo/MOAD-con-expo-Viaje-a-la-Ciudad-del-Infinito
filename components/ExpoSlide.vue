<template>
  <div ref="expoSlide" :class="{'expo-slide' : !slide.custom, 'expo-slide-custom': slide.custom, 'container' : slide.custom }">
    <template v-if="!slide.custom">
      <art :src="slide.src" />
      <div v-if="!showModal" class="expo-slide-info">
        <div class="expo-slide-info-main">
          <div ref="info" class="expo-slide-info-art">
            <div class="expo-slide-info-title">
              {{ slide.title }}
            </div>
            <div class="expo-slide-info-artist">
              {{ slide.author }}
            </div>
          </div>
          <div class="expo-slide-info-share" @mouseleave="linkCopied = false">
            <a id="copy-url" v-clipboard:copy="currentUrl" no-fade="true" @click="linkCopied = true"><i class="las la-link" /></a>
            <b-tooltip
              target="copy-url"
              triggers="hover focus"
              custom-class="tooltip-moad"
              placement="bottom"
            >
              <span v-if="!linkCopied">Copiar enllaç a l'obra</span><span v-else>Enllaç Copiat</span>
            </b-tooltip>
          </div>
          <div class="expo-slide-info-social">
            <a v-if="slide.twitter" :href="'https://twitter.com/'+slide.twitter" target="_blank"><i class="lab la-twitter" /></a>
            <a v-if="slide.instagram" :href="'https://instagram.com/'+slide.instagram" target="_blank"><i class="lab la-instagram" /></a>
            <a v-if="slide.youtube" :href="'https://youtube.com/'+slide.youtube" target="_blank"><i class="lab la-youtube" /></a>
            <a v-if="slide.soundcloud" :href="'https://soundcloud.com/'+slide.soundcloud" target="_blank"><i class="lab la-soundcloud" /></a>
            <a v-if="slide.web" :href="slide.web" target="_blank"><i class="lab la-youtube" /></a>
          </div>
        </div>
        <p v-if="slide.description" class="expo-slide-info-description">
          {{ slide.description }}
        </p>
        <p class="expo-slide-info-description">
          <span>Tècnica </span>{{ slide.technique }}
        </p>
        <p v-if="slide.artistnotes" class="expo-slide-info-description">
          <span>Nota de l'artista </span> {{ slide.artistnotes }}
        </p>
      </div>
    </template>
    <template v-if="slide.custom">
      <div class="expo-slide-custom-title">
        <span>{{ slide.title }}</span>
        <div class="expo-slide-info-share expo-slide-custom-share" @mouseleave="linkCopied = false">
          <a id="copy-url" v-clipboard:copy="currentUrl" no-fade="true" @click="linkCopied = true"><i class="las la-link" /></a>
          <b-tooltip
            target="copy-url"
            triggers="hover focus"
            custom-class="tooltip-moad"
            placement="bottom"
          >
            <span v-if="!linkCopied">Copiar enllaç a l'obra</span><span v-else>Enllaç Copiat</span>
          </b-tooltip>
        </div>
      </div>
      <p class="expo-slide-custom-info">
        {{ slide.description }}
      </p>
    </template>
  </div>
</template>

<script>
import Art from './Art'
export default {
  name: 'ExpoSlide',
  components: {
    Art
  },
  props: {
    slide: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      currentUrl: '',
      linkCopied: false
    }
  },
  computed: {
    showModal () {
      return this.$store.state.showModal
    }
  },
  mounted () {
    this.currentUrl = window.location.href
    // this.setPadding()
  },
  methods: {
    setPadding () {
      const height = this.$refs.info.offsetHeight
      this.$refs.expoSlide.style.setProperty('--title-height', height + 'px')
      /* const programaList = document.querySelector('#programaList')
      programaList.style.setProperty('--overflow-padding-sides', height + 'px') */
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.expo-slide {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: $art-height 1fr;
  gap: 1.5rem;
  margin: 0 8rem;
  justify-items: center;

  &-info {
    align-self: end;
    width: 100%;
    max-width: 800px;
    border-top: 1.5px black solid;
    padding-top: 1.5rem;

    &-main {
      display: grid;
      column-gap: 1rem;
      grid-template-columns: 1fr auto auto;
      align-items: center;
      margin-bottom: 1rem;

      p {
        margin-bottom: 1rem;
      }
    }

    &-art {
      margin-right: auto;
    }

    &-title {
      font-size: 1.75rem;
      line-height: 1.25;
    }

    &-artist {
      font-size: 1.25rem;
      margin-top: .25rem;
    }

    &-description {
      max-width: 800px;
      line-height: 1.5;
    }

    &-share, &-social {
      font-size: 2rem;
    }

    span {
      display: block;
      color: $gray;
    }

    #copy-url {
      cursor: pointer;
    }
  }

  &-custom {
    min-height: calc(100vh - 12rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 4rem;

    &-title {
      display: flex;
      flex-direction: row;
      font-size: 2.75rem;
      margin-bottom: 2rem;
      line-height: 1.2;

      a {
        margin-left: 3rem;
      }
    }

    &-share {
      cursor: pointer;
      font-size: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

@include media-breakpoint-down(md) {
.expo-slide {
display: grid;
grid-template-columns: 1fr;
grid-template-rows: calc(100vh - 4.25rem - 4rem - var(--title-height)) 1fr;
grid-template-areas: "art"
                    "info";
gap: 0;
margin: 0;

  &-info {
    background-color: $light;
    border-top: 1.5px solid $body-color;
    position: relative;
    grid-area: info;
    padding: 1rem;
    margin-bottom: 5rem;

    &-main {
      grid-template-columns: 1fr auto;
      grid-template-rows: auto auto;
    }
  }

  &-art {
    max-height: 100%;
  }

  &-custom {
    &-title {
      font-size: 2.25rem;
    }
  }
}
}
</style>
