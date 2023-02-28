import Vue from "vue";

export const state = () => ({
  turn: 0,
  selected: [],
  check: {
    "0": false,
    "1": false,
    "2": false,
    "3": false
  },
  mate: {
    "0": false,
    "1": false,
    "2": false,
    "3": false
  },
  board: [
    [null, null, null, "R0","N0","B0","K0","Q0","B0","N0","R0", null, null, null],
    [null, null, null, "P0","P0","P0","P0","P0","P0","P0","P0", null, null, null],
    [null, null, null, "","","","","","","","", null, null, null],
    ["R3","P3","","","","","","","","","","","P1","R1"],
    ["N3","P3","","","","","","","","","","","P1","N1"],
    ["B3","P3","","","","","","","","","","","P1","B1"],
    ["Q3","P3","","","","","","","","","","","P1","K1"],
    ["K3","P3","","","","","","","","","","","P1","Q1"],
    ["B3","P3","","","","","","","","","","","P1","B1"],
    ["N3","P3","","","","","","","","","","","P1","N1"],
    ["R3","P3","","","","","","","","","","","P1","R1"],
    [null, null, null, "","","","","","","","", null, null, null],
    [null, null, null, "P2","P2","P2","P2","P2","P2","P2","P2", null, null, null],
    [null, null, null, "R2","N2","B2","Q2","K2","B2","N2","R2", null, null, null],
  ]
})

export const mutations = {
  movePiece(state, pos) {
    Vue.set(state.board[pos[1]], pos[0], document.querySelector(`[data-pos="${state.selected}"]`).dataset.piece);
    Vue.set(state.board[state.selected[1]], state.selected[0], "");
    state.turn++;
    if (state.turn === 4) {
      state.turn = 0;
    }
    while (state.mate[state.turn]) {
      state.turn++;
      if (state.turn === 4) {
        state.turn = 0;
      }
    }
  },
  selectPiece(state, pos) {
    state.selected = pos;
  },
  incremementTurn(state) {
    state.turn++;
    if (state.turn === 4) {
      state.turn = 0;
    }
    while (state.mate[state.turn]) {
      state.turn++;
      if (state.turn === 4) {
        state.turn = 0;
      }
    }
  },
  check(state, player) {
    state.check[player] = true;
  },
  clearCheck(state) {
    state.check = {
      "0": false,
      "1": false,
      "2": false,
      "3": false
    };
  },
  mate(state, player) {
    state.mate[player] = true;
  }
}
