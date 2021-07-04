import expositions from '@/assets/expositions.js'

export const state = () => ({
  showModal: false,
  showMap: false,
  currentSlide: {
    number: 0,
    id: ''
  },
  currentExpoId: '',
  currentExpoName: '',
  currentArt: {},
  expositions: undefined,
  styles: 'defaultStyle'
})

export const mutations = {
  toggleModal (state, payload) {
    if (payload === 'open') {
      state.showModal = true
    } else if (payload === 'close') {
      state.showModal = false
    } else {
      state.showModal = !state.showModal
    }
  },

  resetExpo (state) {
    state.styles = 'defaultStyle'
    state.showModal = false
    state.showMap = false
    state.currentSlide.number = 0
    state.currentSlide.id = ''
  },

  toggleMap (state, payload) {
    if (payload === 'open') {
      state.showMap = true
    } else if (payload === 'close') {
      state.showMap = false
    } else {
      state.showMap = !state.showMap
    }
  },

  changeCurrentSlide (state, newCurrentSlide) {
    state.currentSlide = newCurrentSlide
  },

  changeCurrentExpoId (state, newCurrentExpoId) {
    if (newCurrentExpoId === 'viajeinfinito') {
      state.styles = 'infinitosStyle'
    }
    state.currentExpoId = newCurrentExpoId
  },

  changeCurrentExpoName (state, newCurrentExpoName) {
    state.currentExpoName = newCurrentExpoName
  },

  changeCurrentArt (state, art) {
    state.currentArt = art
  },

  changeStyleToInfinito (state, infinitosStyle) {
    state.styles = infinitosStyle
  }
}

export const getters = {
  currentExpo: (state, params) => {
    return state.expositions[expositions.findIndex(expo => expo.id === params.expo)].expo
  }
}
