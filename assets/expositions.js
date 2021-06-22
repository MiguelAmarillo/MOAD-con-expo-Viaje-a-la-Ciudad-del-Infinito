import epsg from './expositions/epsg.js'
import viajeinfinito from './expositions/viajeinfinito.js'

const expositions = [
  {
    title: 'Universitat en quarantena: art digital del Campus de Gandia',
    img: epsg[5].src.url,
    description: "L'exposició inaugural del MOAD exposa art digital d'alumnes i ex-alumnes del Campus de Gandia. Molts d'ells han realitzat aquestes peces durant la quarantena, periode en el qual els mitjans expositius tradicionals no estaven disponibles.",
    url: 'epsg',
    id: 'epsg',
    expo: epsg
  },
  {
    title: 'Viaje a la ciudad del infinito',
    description: 'La exposición Viaje a la ciudad del infinito de la Fundación Vicente Ferrer nos invita a hacer un recorrido fotográfico e histórico que se inicia en el año 1952 con la llegada de Vicente a India.',
    url: 'viajeinfinito',
    id: 'viajeinfinito',
    expo: viajeinfinito
  },
  {
    title: 'Espai disponible',
    description: 'La Sala 3 està disponible per a exposar. Contacta amb nosaltres si vols participar'
  },
  {
    title: 'Espai disponible',
    description: 'La Sala 4 està disponible per a exposar. Contacta amb nosaltres si vols participar'
  }
]

export default expositions
