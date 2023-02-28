<template>
  <div class="turn-indicator">{{this.text}}</div>
</template>

<script>
export default {
  computed: {
    text: function() {
      if (this.$store.state.mate[this.turn]) {
        return "CHECK\nMATED"
      } else {
        return "YOUR TURN"
      }
    }
  }, props: {
    turn: Number
  }
}
</script>

<style scoped>
.turn-indicator {
  @apply absolute w-[9rem] h-[9rem] text-center text-2xl text-white font-bold flex flex-col justify-center items-center transition-all
}
.red {
  @apply bg-red-400 left-0 top-0 rotate-180;
}
.blue {
  @apply bg-blue-400 left-[calc(100%-9rem)] top-0 -rotate-90;
}
.yellow {
  @apply  bg-yellow-400 left-[calc(100%-9rem)] top-[calc(100%-9rem)];
}
.green {
  @apply bg-green-400 left-0 top-[calc(100%-9rem)] rotate-90;
}
div.disabled {
  @apply bg-[#323232] text-[#262626];
}
</style>
