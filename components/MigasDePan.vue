<template>
  <div class="row justify-content-center migas-container" v-if="showMigasDePan">
    <div  class="col-sm-8 ">
            <div class="row justify-content-left">
        <div class="col-sm-12 withoutPaddings">
          Expo: VIAJE A LA CIUDAD DEL INFINITO
        </div>
      </div>
      <div class="mobile-row">
        <div class="row justify-content-left mobile-col" >
          <div class="col-12 col-md-3 withoutPaddings">
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
          <div class="col-12 col-md-3 withoutPaddings">
            <nuxt-link class="expo-link-migas" to="/biografias">
              <svg
              v-if="$route.name == 'biografias' || $route.fullPath.includes('/expositions/vicenteFerrer') || $route.fullPath.includes('/expositions/annaFerrer')"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-right-fill">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg>
                <a>Vicente y Anna</a>
              <svg
              v-if="$route.name == 'biografias' || $route.fullPath.includes('/expositions/vicenteFerrer') || $route.fullPath.includes('/expositions/annaFerrer')"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-left-fill" >
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
              </svg>
            </nuxt-link>
          </div>
          <div class="col-12 col-md-3 withoutPaddings">
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
          <div class="col-12 col-md-3 withoutPaddings">
            <nuxt-link class="expo-link-migas" to="/proyectosFundacion">
              <svg
              v-if="$route.name == 'proyectosFundacion' || $route.fullPath.includes('/expositions/ecologia') ||
             $route.fullPath.includes('/expositions/educacion') ||
             $route.fullPath.includes('/expositions/feminismo') ||
             $route.fullPath.includes('/expositions/deporte')"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-right-fill">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg>
                <a>Proyectos</a>
              <svg
              v-if="$route.name == 'proyectosFundacion'  || $route.fullPath.includes('/expositions/ecologia') ||
             $route.fullPath.includes('/expositions/educacion') ||
             $route.fullPath.includes('/expositions/feminismo') ||
             $route.fullPath.includes('/expositions/deporte')"
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
            <!-- subseccion biografias--->
      <div v-if="$route.name !== 'viajeinfinito' && $route.name !== 'tuneldeltiempo'" class="vertical-line"></div>

      <div class="row justify-content-left mobile-col " v-if="$route.name == 'biografias' || $route.fullPath.includes('/expositions/vicenteFerrer') || $route.fullPath.includes('/expositions/annaFerrer')">
        <div class="col-sm-12 col-md-4 withoutPaddings align-self-start">
          <nuxt-link class="expo-link-migas" to="/expositions/vicenteFerrer">
            <svg
            v-if="$route.fullPath.includes('/expositions/vicenteFerrer')"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right-fill">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
              <a>Vicente Ferrer</a>
            <svg
            v-if="$route.fullPath.includes('/expositions/vicenteFerrer')"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-left-fill" >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
          </nuxt-link>
        </div>
        <div class="col-sm-12 col-md-4 withoutPaddings align-self-start">
          <nuxt-link class="expo-link-migas" to="/expositions/annaFerrer">
            <svg
            v-if="$route.fullPath.includes('/expositions/annaFerrer')"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right-fill">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
              <a>Anna Ferrer</a>
            <svg
            v-if="$route.fullPath.includes('/expositions/annaFerrer')"
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
      <!-- subseccion proyectosFundacion--->
      <div class="row justify-content-left mobile-col"
             v-if="$route.name == 'proyectosFundacion' ||
             $route.fullPath.includes('/expositions/ecologia') ||
             $route.fullPath.includes('/expositions/educacion') ||
             $route.fullPath.includes('/expositions/feminismo') ||
             $route.fullPath.includes('/expositions/deporte')">
        <div class="col-sm-12 col-md-3 withoutPaddings">
          <nuxt-link class="expo-link-migas" to="/expositions/ecologia">
            <svg
            v-if="$route.fullPath.includes('/expositions/ecologia')"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right-fill">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
              <a>Ecología</a>
            <svg
            v-if="$route.fullPath.includes('/expositions/ecologia')"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-left-fill" >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
          </nuxt-link>
        </div>
        <div class="col-sm-12 col-md-3 withoutPaddings">
          <nuxt-link class="expo-link-migas" to="/expositions/educacion">
            <svg
            v-if="$route.fullPath.includes('/expositions/educacion')"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right-fill">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
              <a>Educación</a>
            <svg
            v-if="$route.fullPath.includes('/expositions/educacion')"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-left-fill" >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
          </nuxt-link>
        </div>
        <div class="col-sm-12 col-md-3 withoutPaddings">
          <nuxt-link class="expo-link-migas" to="/expositions/feminismo">
            <svg
            v-if="$route.fullPath.includes('/expositions/feminismo')"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right-fill">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
              <a>Feminismo</a>
            <svg
            v-if="$route.fullPath.includes('/expositions/feminismo')"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-left-fill" >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
          </nuxt-link>
        </div>
        <div class="col-sm-12 col-md-3 withoutPaddings">
          <nuxt-link class="expo-link-migas" to="/expositions/deporte">
            <svg
            v-if="$route.fullPath.includes('/expositions/deporte')"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right-fill">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
              <a>Deporte</a>
            <svg
            v-if="$route.fullPath.includes('/expositions/deporte')"
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
      <div>

    </div>

    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      currentUrl: '',
    }
  },
  computed: {
    showMigasDePan () {
      return this.$store.state.activeZone === 'viajeinfinito'
    },
    hey () {
      return this.$nuxt
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

@media (max-width: 768px) {
  .mobile-row {
    display: flex;
    flex-direction: row;
  }

  .mobile-row {
}
.vertical-line {
  border-left: 2px solid white;
  height: 5rem;
  padding-left: 5px;
}
}

</style>
