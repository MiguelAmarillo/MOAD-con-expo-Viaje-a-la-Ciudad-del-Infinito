<template>
  <div class="viajeinfinito justify-content-center " >
    <div class="box" style="margin:10px position:center">
      <p>
        La Fundación Vicente Ferrer (FVF) es una Organización No Gubernamental de Desarrollo comprometida desde 1969 con el proceso de transformación de zonas rurales
en Andhra Pradesh y Telangana, al sureste de la India.
<br>Trabajamos con comunidades empobrecidas y con colectivos especialmente vulnerables: mujeres y personas con discapacidad. <br>Estamos presentes en más de 3.600 pueblos y apoyamos
cerca de 3 millones de personas.
El modelo de desarrollo de la FVF en la India coincide
con el conjunto de propuestas globales de la ONU
para alcanzar los Objetivos de Desarrollo Sostenible en 2030.
      </p>
    </div>
    <div class="box" style="margin:10px position:center">
      <p>
    <br><b>Viaje a la ciudad del infinito</b><br>
<br>Edición contenidos:
Fundación Vicente Ferrer
<br>Fotografías gran formato:
Pablo Lasaosa
<br>Diseño de la exposición:
Jana Martínez
<br>Corrección de contenidos:
Rosa Estrella
<br>Fb: @FundacionVicenteFerrer
<br>Tw: @FVicenteFerrer
<br>Ig: @FVicenteFerrer
      </p>
      </div>
    <div class="justify-content-center">
      <div class="col-12 col-md-3 withoutPaddings" style="margin: 40px 0px 0px 20px">
        <a href="https://fundacionvicenteferrer.org/es/donar"  target="_blank">
        <b-button class="btn">Dona a la fundación</b-button>
        </a>
      </div>
      <div class="col-12 col-md-3 withoutPaddings" style="margin: 15px 0px 0px 20px">
        <nuxt-link class="expo-link-migas" to="/viajeinfinito">
          <b-button class="btn">Volver a la exposión</b-button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  head () {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: `/${this.$store.state.styles}.css`
        }
      ]
    }  },
  data () {
    return {
      value: ''
    }
  },
  mounted () {
    this.$store.commit('changeStyleToInfinito', 'infinitosStyle')
    this.$store.commit('changeCurrentExpoId', 'viajeinfinito')
    this.$store.commit('changeZone','viajeinfinito')

  },
  layout: 'default-footer'
}
</script>

<style lang="scss" scoped>

.btn {
background-color: #E55C17;
}

.viajeinfinito {
  background-color: #3C3C3B;
  color: white;
}

.row {
  margin: 0 3rem
}
.withoutPaddings {
  padding: 0px;
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  margin: 0px 20px 0px 20px;
}

</style>
