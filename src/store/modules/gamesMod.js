import { db } from "@/firebase.js";

export default {
  namespaced: true,
  state: {
    games: [],
  },
  mutations: {
    mtnGames(state, n) {
      state.games = n;
    },
  },
  actions: {
    setGames: ({ commit }) => {
      db.collection('games').onSnapshot((snapshot) => {
        let gamesArray = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          gamesArray.push(doc.data());
        });
        commit('mtnGames', gamesArray);
      });
    },
  },
//   getters: {
//     getAllGames(state){
//         return state.games
//         }
//     }
};