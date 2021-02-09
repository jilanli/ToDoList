import { createStore } from 'vuex'

export default createStore({
  state: {
    list:  [{
      title: "having meal",
      complete: 'fales',
  },
  {
      title: "sleep",
      complete: 'fales',
  },
  {
      title: "coding",
      complete: 'true',
  }]

  },
  mutations: {
    addTodo(state, payload){
      state.list.push(payload)
    },

    delTodo(state, payload) {
      state.list.splice(payload, 1)
    },
    clear(state, payload) {
      state.list = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
