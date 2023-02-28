<template>
  <div class="square" :data-pos="this.pos" :data-piece="this.piece" @click="clickHandler">
    <Piece :piece="this.piece" :pos="this.pos" v-if="this.piece"/>
  </div>
</template>

<style>
.square {
  @apply w-14 aspect-square inline-block bg-white relative
}
.square:not(.square-invert) {
  @apply group-odd:odd:bg-purple-400 group-even:even:bg-purple-400;
}
.square-invert {
  @apply group-even:odd:bg-purple-400 group-odd:even:bg-purple-400;
}
.valid-move::after/*, .capture-move::after */{
  content: "";
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
}
.valid-move::after {
  background: rgba(50, 50, 50, 0.5);
}
.capture-move/*::after*/ {
  outline: rgba(255, 0, 0, 0.5) solid 5px;
  outline-offset: -5px;
}
 .check {
   background: darkred !important;
 }
</style>

<script>
export default {
  props: {
    piece: String,
    pos: Array
  },
  methods: {
    clickHandler() {
      if (this.$el.classList.contains("valid-move") || this.$el.classList.contains("capture-move")) {
        this.$store.commit("movePiece", this.pos);
        this.$store.commit("selectPiece", []);
        for (const el of document.querySelectorAll(".square")) {
          el.classList.remove("valid-move", "capture-move");
        }
      } else {
        this.$store.commit("selectPiece", []);
        for (const el of document.querySelectorAll(".square")) {
          el.classList.remove("valid-move", "capture-move");
        }
        if (this.piece
          && this.piece.charAt(1) == this.$store.state.turn
        ) {
          this.$children[0].showMoves();
        }
      }
    }
  }
}
</script>
