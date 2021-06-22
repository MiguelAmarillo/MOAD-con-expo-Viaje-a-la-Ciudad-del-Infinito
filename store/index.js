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
  expositions
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
    state.currentExpoId = newCurrentExpoId
  },

  changeCurrentExpoName (state, newCurrentExpoName) {
    state.currentExpoName = newCurrentExpoName
  },

  changeCurrentArt (state, art) {
    state.currentArt = art
  }
}

export const getters = {
  currentExpo: (state, params) => {
    return state.expositions[expositions.findIndex(expo => expo.id === params.expo)].expo
  }
}
