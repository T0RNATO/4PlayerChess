<template>
  <div>
    <button @click="skipTurn" class="absolute bg-white rounded-md p-4 top-2 left-2">Skip Player</button>
    <div class="w-full flex justify-center h-[100vh] items-center">
      <Game :board="this.board" :selected="this.$store.state.selected" ref="game"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: this.$store.state.board
    }
  },
  methods: {
    skipTurn() {
      this.$store.commit("incremementTurn");
    }
  }
}
</script>
