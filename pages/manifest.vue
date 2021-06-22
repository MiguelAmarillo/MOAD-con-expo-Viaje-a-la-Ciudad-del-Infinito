<template>
  <div class="container manifesto">
    <h3>Sobre el Museu</h3>
    <p>
      El Museu Online d'Art Digital vol ser una institució lliure, oberta i gratuïta al servei d'artistes, investigadors i curadors. Busca crear un espai ideal a l'artista digital per a exposar la seua obra i una plataforma útil per a l'exposició, conservació i organització de l'art digital. De la mateixa manera, pretén obrir l'Art Digital a un públic més ampli.
    </p>
    <p>
      Acabem de nàixer com a institució, pero volem seguir cresquent amb tu. <nuxt-link to="participa">
        Vols participar?
      </nuxt-link>
    </p>
    <h3>El nostre manifest</h3>
    <p>
      Il·lustracions precioses perdudes a la timeline de Twitter. Animacions de 15 segons consumides a una història d’instagram. Peces interactives inaccessibles a un domini caducat.
    </p>
    <p>
      Avui dia es crea art, disseny, il·lustració, publicitat.. que es perd en l’oceà d’informació. Obres amb estils únics, valor incalculable, narratives que defineixen els nostres dies. Obres consumides fugaçment. Obres que no han estat pensades per a ser impresses i que no s’immortalitzen tot i que tenen un inestimable valor. Obres que en molts casos ningú recopila ni conserva, discriminades per haver nascut sense cos.
    </p>
    <p>
      Hui creem una institució que, amb la participació d’artistes i curadors, es dedicarà a recopilar, conservar i exposar art digital. Ho farà amb una aplicació web que porta l’experiència del museu a les xarxes. Un museu online, per a obres concebides en el medi intangible. Un museu on manaran els artistes, i que els oferirà un llenç en blanc digital: un espai expositiu multimèdia acorde a les seues necessitats. Un museu que es mou: lliure, gratuït, interactiu, accessible des de qualsevol lloc, amb qualsevol dispositu, per qualsevol persona.
    </p>
    <p>Creem un museu nou, i aspirem a crear un nou museu. </p>
    <p>Benvingudes al Museu Online d’Art Digital.</p>
  </div>
</template>

<script>
export default {
  layout: 'default-footer'
}
</script>

<style lang="scss" scoped>
  .manifesto {
    p {
      line-height: 1.7;
      font-size: 1.25rem;
    }

    h1 {
      text-align: left;
    }
  }
</style>
