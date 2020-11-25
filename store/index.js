export const state = () => ({
  elements: [],
  element: {}
})

export const getters = {}

export const mutations = {
  SET_ELEMENTS: (state, elements) => (state.elements = elements),
  SET_ELEMENT: (state, element) => (state.element = element)
}

export const actions = {

  async loadAllElements ({ commit }) {
    try {
      const data = await fetch(
        'https://neelpatel05.pythonanywhere.com'
      ).then(res => res.json())

      commit('SET_ELEMENTS', data)
    } catch (error) {
    }
  },

  async loadSingleElement ({ commit }, elementName) {
    try {
      const data = await fetch(
        `https://neelpatel05.pythonanywhere.com/element/atomicname?atomicname=${elementName}`
      ).then(res => res.json())

      commit('SET_ELEMENT', data)
    } catch (error) {
    }
  }
}
