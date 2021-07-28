import creyendo from '~/assets/art/expo-epsg/anon-creyendo.jpg'
import mariposas from '~/assets/art/expo-epsg/carrion-mariposas.jpg'
import lagrimas from '~/assets/art/expo-epsg/monto-lagrimas.png'
import oniria from '~/assets/art/expo-epsg/monto-oniria.jpg'
import polifemo from '~/assets/art/expo-epsg/monto-polifemo.jpg'

const feminismo = [
  {
    id: 'viajeinfinito',
    title: 'Viaje a la ciudad del infinito',
    description: 'La exposición Viaje a la ciudad del infinito de la Fundación Vicente Ferrer nos invita a hacer un recorrido fotográfico e histórico que se inicia en el año 1952 con la llegada de Vicente a India.',
    custom: true
  },
  {
    id: 'epsg',
    title: "L'art digital en quarantena",
    description: "L'exposició inaugural del MOAD exposa art digital de companys del Campus de Gandia. Molts d'ells han realitzat aquestes peces durant la quarantena, periode en el qual els mitjans expositius tradicionals no estaven disponibles. Aquesta exposició és un recull d'obres sense res més en comú entre elles que el fet d'haver sigut produïdes en un periode únic per un grup de gent que conviu en un mateix lloc durant el curs. És una exposició, a més, oberta a tot l'alumnat que hi vulga participar.",
    custom: true
  },
  {
    id: 'mariposas',
    title: 'Mariposas en la cabeza de marcos',
    src: {
      type: 'img',
      url: mariposas,
      thumbnail: mariposas
    },
    author: 'Julia Carrión',
    artistnotes: 'Realicé esta obra durante el periodo de confinamiento, dónde estaba 24h con mi hermano Marcos entre 4 paredes. Lo observé todos los días y de aquí nació la idea de este collage. Han pasado muchos años, pero sigue con mariposas en la cabeza. '
  },
  {
    id: 'loose',
    title: 'Loose',
    src: {
      type: 'video',
      url: '/video/mateos-loose.mp4',
      thumbnail: require('~/assets/art/expo-epsg/thumbnails/mateos-loose-th.png')
    },
    author: 'Eduardo Mateos',
    artistnotes: 'Pieza de arte abstracto que combina 2D y 3D en un juego visual que atraviesa las etapas de una sociedad. Una comunidad que crece en grupo y pronto se convierte en un campo de batalla de posiciones opuestas que acaba inevitablemente con la consumación de uno de las fuerzas.'
  },
  {
    id: 'creyendo',
    title: 'Creyendo estar contigo',
    src: {
      type: 'img',
      url: creyendo,
      thumbnail: creyendo
    },
    author: 'Sofía Añón Picó',
    description: 'Creyendo estar contigo és un cartell per a la pel·lícula In the Mood For Love.',
    artistnotes: '“Juego conmigo a ser feliz creyendo estar contigo. Después de todo este tiempo me deberías resultar extraña, pero, en realidad, me duele sentirte lejos.” Rodeados de un ambiente cargado y asfixiante, los protagonistas desean estar juntos, se quieren, se anhelan, se sienten cerca, casi incluso rozándose; pero a su vez, una invisible distancia los separa, se sienten lejos, perdidos, solos, cada uno mirando a su lado, haciendo imposible que estén juntos.'
  },
  {
    id: 'raices',
    title: 'Raíces',
    src: {
      type: 'video',
      url: '/video/socarrona-raices.mp4',
      thumbnail: require('~/assets/art/expo-epsg/thumbnails/socarrona-raices-th.png')
    },
    author: 'Socarrona',
    web: 'https://www.socarrona.com/'
  },
  {
    id: 'lagrimas',
    title: 'Entre paredes de lágrimas',
    src: {
      type: 'img',
      url: lagrimas,
      thumbnail: lagrimas
    },
    author: 'Carlos Montó'
  },
  {
    id: 'oniria',
    title: 'Oniria',
    src: {
      type: 'img',
      url: oniria,
      thumbnail: oniria
    },
    author: 'Carlos Montó'
  },
  {
    id: 'polifemo',
    title: 'Polifemo',
    src: {
      type: 'img',
      url: polifemo,
      thumbnail: polifemo
    },
    author: 'Carlos Montó'
  },
  {
    id: 'undercover',
    title: 'Undercover Love',
    src: {
      type: 'audio',
      url: '/audio/freq-undercover.mp3'
    },
    author: 'detunedfreq',
    artistnotes: 'Llevaba tiempo queriendo hacer un tema pop con ritmo de garage, y esta fue la oportunidad perfecta. Además, creo que usar el piano como instrumento principal del break le da un toque especial. No sé, esto no representa nada. Simplemente me mola un montón cómo suena.'
  },
  {
    id: 'letsgoaway',
    title: "Let's Go Away For A While",
    src: {
      type: 'video',
      url: '/video/polfrank-letsgo.mp4',
      thumbnail: require('~/assets/art/expo-epsg/thumbnails/polfrank-letsgo-th.png')
    },
    author: 'PolFrank',
    artistnotes: 'Estar tancada a casa dels pares i tenint l\'equip que sol utilitzar per gravar música al meu pis, em va "obligar" a fer música d\'una manera molt més acústica i de baix pressupost del què estic acostumada. Amb només tres instruments: piano, baix elèctric i un tamboret, i gravat amb l\'àudio i la càmera del mòbil, vaig aconseguir tocar un arrangement d\'esta peça dels Beach Boys, una peça que feia temps que volia versionar i que per falta de temps, no havia pogut abans. La quarentena ha fet que veja que "menys és més" i que no cal tindre-ho tot per fer alguna cosa decent.'
  },
  {
    id: 'epsg-end',
    title: "L'art digital en quarantena",
    description: "Moltes gràcies per visitar l'exposició inaugural del Museu Online d'Art Digital. Moltes gràcies a Sofía Añón Picó, Eduardo Mateos, Julia Carrión, Socarrona, Carlos Montó, detunedfreq i PolFrank per confiar en aquesta plataforma tan nova per a exposar el seu art. Aquesta és una exposició oberta i en proves. Si tens suggerències i/o vols participar envia un correu a moad@imcarl.es. Si t'ha agradat l'exposició, comparteix-la. Gràcies per la visita!",
    custom: true
  }
]

export default feminismo
