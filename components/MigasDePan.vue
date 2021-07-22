<template>
  <div class="row justify-content-center migas-container" v-if="showMigasDePan">
    <div  class="col-sm-8" >
      <div class="row justify-content-left">
        <div class="col-sm-12 withoutPaddings">
          Expo: VIAJE A LA CIUDAD DEL INFINITO
        </div>
      </div>
      <div class="row justify-content-left">
        <div class="col-6 col-sm-4 col-md-3 withoutPaddings">
          <nuxt-link class="expo-link-migas" to="/viajeinfinito">
          <svg
          v-if="$route.name == 'viajeinfinito'"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-right-fill">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
            <a>Inicio</a>
          <svg
          v-if="$route.name == 'viajeinfinito'"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-left-fill" >
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
          </svg>
          </nuxt-link>
        </div>
        <div class="col-6 col-sm-4 col-md-3 withoutPaddings">
          <nuxt-link class="expo-link-migas" to="/biografias">
            <svg
            v-if="$route.name == 'biografias'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right-fill">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
              <a>Vicente y Anna</a>
            <svg
            v-if="$route.name == 'biografias'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-left-fill" >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
          </nuxt-link>
        </div>
        <div class="col-6 col-sm-4 col-md-3 withoutPaddings">
          <nuxt-link class="expo-link-migas" to="/tuneldeltiempo">
            <svg
            v-if="$route.name == 'tuneldeltiempo'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right-fill">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
              <a>Túnel del tiempo</a>
            <svg
            v-if="$route.name == 'tuneldeltiempo'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-left-fill" >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
          </nuxt-link>
        </div>
        <div class="col-6 col-sm-4 col-md-3 withoutPaddings">
          <nuxt-link class="expo-link-migas" to="/proyectosFundacion">
            <svg
            v-if="$route.name == 'proyectosFundacion'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right-fill">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
              <a>Proyectos</a>
            <svg
            v-if="$route.name == 'proyectosFundacion'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-left-fill" >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
          </nuxt-link>
        </div>
      </div>
      <div class="row justify-content-left" v-if="$route.name == 'biografias'">
        <div class="col-sm-12 col-md-4 withoutPaddings">
          <nuxt-link class="expo-link-migas" to="/biografias">
            <svg
            v-if="$route.name == 'biografias'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right-fill">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
              <a>Vicente Ferrer</a>
            <svg
            v-if="$route.name == 'biografias'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-left-fill" >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
          </nuxt-link>
        </div>
        <div class="col-sm-12 col-md-4 withoutPaddings">
          <nuxt-link class="expo-link-migas" to="/biografias">
            <svg
            v-if="$route.name == 'biografias'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right-fill">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
              <a>Anna Ferrer</a>
            <svg
            v-if="$route.name == 'biografias'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-left-fill" >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      currentUrl: ''
    }
  },
  computed: {
    showMigasDePan () {
      return this.$store.state.currentExpoId === 'viajeinfinito'
    }
  }
}
</script>

<style>
.migas-container{
  margin: 0  0 2rem 0;
}
body {
font-size: 12px
}

.expo-link-migas:link { color: white; text-decoration:none; }
.expo-link-migas:hover { color: #A03A1E; text-decoration:none }
.expo-link-migas:active { color: white; text-decoration:none; }

.bi {
  fill: #A03A1E !important;
}
</style>
