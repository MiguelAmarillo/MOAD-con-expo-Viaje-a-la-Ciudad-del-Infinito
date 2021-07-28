import epsg from './expositions/epsg.js'
import viajeinfinito from './expositions/viajeinfinito.js'
import annaFerrer from './expositions/annaFerrer.js'
import vicenteFerrer from './expositions/vicenteFerrer.js'
import feminismo from './expositions/feminismo.js'
import ecologia from './expositions/ecologia.js'
import educacion from './expositions/educacion.js'
import deporte from './expositions/deporte.js'

const expositions = [
  {
    title: 'Universitat en quarantena: art digital del Campus de Gandia',
    img: epsg[5].src.url,
    description: "L'exposició inaugural del MOAD exposa art digital d'alumnes i ex-alumnes del Campus de Gandia. Molts d'ells han realitzat aquestes peces durant la quarantena, periode en el qual els mitjans expositius tradicionals no estaven disponibles.",
    url: 'epsg',
    id: 'epsg',
    showInit: true,
    expo: epsg
  },
  {
    title: 'Viaje a la ciudad del infinito',
    description: 'La exposición Viaje a la ciudad del infinito de la Fundación Vicente Ferrer nos invita a hacer un recorrido fotográfico e histórico que se inicia en el año 1952 con la llegada de Vicente a India.',
    url: 'viajeinfinito',
    id: 'viajeinfinito',
    showInit: true,
    expo: viajeinfinito
  },
  {
    title: 'Vida de Anna Ferrer',
    description: 'Vida de Anna Ferrer.',
    url: 'annaFerrer',
    id: 'annaFerrer',
    showInit: false,
    expo: annaFerrer
  },
  {
    title: 'Vida de vicenteFerrer',
    description: 'Vida de Anna Ferrer.',
    url: 'vicenteFerrer',
    id: 'vicenteFerrer',
    showInit: false,
    expo: vicenteFerrer
  },
  {
    title: 'Vida feminismo',
    description: 'Vida de Anna Ferrer.',
    url: 'feminismo',
    id: 'feminismo',
    showInit: false,
    expo: feminismo
  },
  {
    title: 'Vida ecologia',
    description: 'Vida de Anna Ferrer.',
    url: 'ecologia',
    id: 'ecologia',
    showInit: false,
    expo: ecologia
  },
  {
    title: 'Vida educacion',
    description: 'Vida de Anna Ferrer.',
    url: 'educacion',
    id: 'educacion',
    showInit: false,
    expo: educacion
  },
  {
    title: 'Vida deporte',
    description: 'Vida de Anna Ferrer.',
    url: 'deporte',
    id: 'deporte',
    showInit: false,
    expo: deporte
  },
  {
    title: 'Espai disponible',
    description: 'La Sala 3 està disponible per a exposar. Contacta amb nosaltres si vols participar',
    showInit: true,
  },
  {
    title: 'Espai disponible',
    description: 'La Sala 4 està disponible per a exposar. Contacta amb nosaltres si vols participar',
    showInit: true,
  }
]

export default expositions
