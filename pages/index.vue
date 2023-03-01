<template>
  <div>
    <div class="w-full flex justify-center h-[100vh] items-center">
      <Game :selected="this.$store.state.selected" ref="game"/>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("hi")
    if (localStorage.board) {
      this.$store.commit("setValue", ["board", JSON.parse(localStorage.board)])
    }
    if (localStorage.turn) {
      this.$store.commit("setValue", ["turn", JSON.parse(localStorage.turn)])
    }
  }
}
</script>
