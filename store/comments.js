// store/comments.js
export const state = () => ({
    comments: []
  })
  
  export const mutations = {
    setComments(state, comments) {
      state.comments = comments
    },
    addComment(state, comment) {
      state.comments.push(comment)
    }
  }
  
  export const actions = {
    async fetchComments({ commit }) {
    //   const comments = await this.$axios.$get('/api/comments')
    const comments = [
      "hello",
      "no hello",
    ]
      commit('setComments', comments)
    },
    async addComment({ commit }, comment) {
    //   const newComment = await this.$axios.$post('/api/comments', comment)
        const newComment = [
          "hello",
          "no hello"
        ]
      commit('addComment', newComment)
    }
  }
  