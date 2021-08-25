<template>
  <div class="row justify-content-center migas-container" v-if="showMigasDePan">
    <div  class="col-sm-10 ">
      <div class="row justify-content-left ">
        <div class="col-sm-12 withoutPaddings margin-row">
          <b>Expo: VIAJE A LA CIUDAD DEL INFINITO</b>
        </div>
      </div>
      <div class="mobile-row">
        <div class="row justify-content-left mobile-col mobile-box margin-row">
          <div class="col-12 col-md-3 withoutPaddings">
            <nuxt-link class="expo-link-migas" to="/viajeinfinito">
              <corchete-izquierdo v-if="$route.name == 'viajeinfinito'"></corchete-izquierdo>
                <a>Inicio</a>
              <corchete-derecho v-if="$route.name == 'viajeinfinito'"></corchete-derecho>
            </nuxt-link>
          </div>
          <div class="col-12 col-md-3 withoutPaddings">
            <nuxt-link class="expo-link-migas" to="/biografias">
               <corchete-izquierdo
              v-if="$route.name == 'biografias' || $route.fullPath.includes('/expositions/vicenteFerrer') || $route.fullPath.includes('/expositions/annaFerrer')"
              ></corchete-izquierdo>
                <a>Vicente y Anna</a>
               <corchete-derecho
              v-if="$route.name == 'biografias' || $route.fullPath.includes('/expositions/vicenteFerrer') || $route.fullPath.includes('/expositions/annaFerrer')"
              ></corchete-derecho>
            </nuxt-link>
          </div>
          <div class="col-12 col-md-3 withoutPaddings">
            <nuxt-link class="expo-link-migas" to="/tuneldeltiempo">
               <corchete-izquierdo
              v-if="$route.name == 'tuneldeltiempo'"
              ></corchete-izquierdo>
                <a>Túnel del tiempo</a>
               <corchete-derecho
              v-if="$route.name == 'tuneldeltiempo'"
              ></corchete-derecho>

            </nuxt-link>
          </div>
          <div class="col-12 col-md-3 withoutPaddings">
            <nuxt-link class="expo-link-migas" to="/proyectosFundacion">
               <corchete-izquierdo
              v-if="$route.name == 'proyectosFundacion' || $route.fullPath.includes('/expositions/ecologia') ||
             $route.fullPath.includes('/expositions/educacion') ||
             $route.fullPath.includes('/expositions/feminismo') ||
             $route.fullPath.includes('/expositions/deporte')"
              ></corchete-izquierdo>
                <a>Proyectos</a>
               <corchete-derecho
              v-if="$route.name == 'proyectosFundacion'  || $route.fullPath.includes('/expositions/ecologia') ||
             $route.fullPath.includes('/expositions/educacion') ||
             $route.fullPath.includes('/expositions/feminismo') ||
             $route.fullPath.includes('/expositions/deporte')"
              ></corchete-derecho>
            </nuxt-link>
          </div>
        </div>
            <!-- subseccion biografias--->
      <div v-if="$route.name !== 'viajeinfinito' && $route.name !== 'tuneldeltiempo'" class="vertical-line"></div>

      <div class="row justify-content-left align-content-center mobile-col " v-if="$route.name == 'biografias' || $route.fullPath.includes('/expositions/vicenteFerrer') || $route.fullPath.includes('/expositions/annaFerrer')">
        <div class="col-sm-12 col-md-4 withoutPaddings align-self-start">
          <nuxt-link class="expo-link-migas" to="/expositions/vicenteFerrer">
             <corchete-izquierdo
            v-if="$route.fullPath.includes('/expositions/vicenteFerrer')"
              ></corchete-izquierdo>
              <a>Vicente Ferrer</a>
             <corchete-derecho
            v-if="$route.fullPath.includes('/expositions/vicenteFerrer')"
              ></corchete-derecho>
          </nuxt-link>
        </div>
        <div class="col-sm-12 col-md-4 withoutPaddings align-self-start">
          <nuxt-link class="expo-link-migas" to="/expositions/annaFerrer">
             <corchete-izquierdo
            v-if="$route.fullPath.includes('/expositions/annaFerrer')"
              ></corchete-izquierdo>
              <a>Anna Ferrer</a>
             <corchete-derecho
            v-if="$route.fullPath.includes('/expositions/annaFerrer')"
               ></corchete-derecho>

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
             <corchete-izquierdo
            v-if="$route.fullPath.includes('/expositions/ecologia')"
              ></corchete-izquierdo>

              <a>Ecología</a>
             <corchete-derecho
            v-if="$route.fullPath.includes('/expositions/ecologia')"
              ></corchete-derecho>

          </nuxt-link>
        </div>
        <div class="col-sm-12 col-md-3 withoutPaddings">
          <nuxt-link class="expo-link-migas" to="/expositions/educacion">
             <corchete-izquierdo
            v-if="$route.fullPath.includes('/expositions/educacion')"
              ></corchete-izquierdo>

              <a>Educación</a>
             <corchete-derecho
            v-if="$route.fullPath.includes('/expositions/educacion')"
              ></corchete-derecho>

          </nuxt-link>
        </div>
        <div class="col-sm-12 col-md-3 withoutPaddings">
          <nuxt-link class="expo-link-migas" to="/expositions/feminismo">
             <corchete-izquierdo
            v-if="$route.fullPath.includes('/expositions/feminismo')"
                ></corchete-izquierdo>

              <a>Feminismo</a>
             <corchete-derecho
            v-if="$route.fullPath.includes('/expositions/feminismo')"
              ></corchete-derecho>

          </nuxt-link>
        </div>
        <div class="col-sm-12 col-md-3 withoutPaddings">
          <nuxt-link class="expo-link-migas" to="/expositions/deporte">
             <corchete-izquierdo
            v-if="$route.fullPath.includes('/expositions/deporte')"
              ></corchete-izquierdo>

              <a>Deporte</a>
             <corchete-derecho
            v-if="$route.fullPath.includes('/expositions/deporte')"
              ></corchete-derecho>

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
import corcheteIzquierdo from './corcheteIzquierdo'
import corcheteDerecho from './corcheteDerecho'


export default {
    components: {
    corcheteIzquierdo,
    corcheteDerecho
  },
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

.expo-link-migas:link { color: #CFC8BB; text-decoration:none; }
.expo-link-migas:hover { color: #E55C17; text-decoration:none }
.expo-link-migas:active { color: #CFC8BB; text-decoration:none; }

.bi {
  fill: #E55C17 !important;
}

@media (max-width: 768px) {
  .mobile-row {
    display: flex;
    flex-direction: row;
  }

  .mobile-row {
}
.vertical-line {
  border-left: 2px solid #CFC8BB;
  height: 5rem;
  padding-left: 5px;
}
  .mobile-box {
    max-width: 200px;
  }
}

@media (min-width: 768px) {
  .margin-row{
    margin-bottom: 5px
  }
}


</style>
