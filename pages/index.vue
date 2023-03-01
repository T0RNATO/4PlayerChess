<template>
  <div>
    <button class="bg-white p-3 absolute m-2 rounded-md" @click="resetBoard">Reset Board</button>
    <div class="w-full flex justify-center h-[100vh] items-center">
      <Game :selected="this.$store.state.selected" ref="game"/>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (localStorage.data) {
      const data = JSON.parse(localStorage.data);
      this.$store.commit("setState", data);
    }
  },
  methods: {
    resetBoard() {
      delete localStorage.data;
      location.reload();
    }
  }
}
</script>
