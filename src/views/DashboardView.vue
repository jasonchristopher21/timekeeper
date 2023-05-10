<script lang="ts">
export default {
  data() {
    return {
      name: "Jason"
    }
  }
}
</script>

<template>
  <div class="px-10 py-10">
    <div class="text-4xl text-black font-jakarta font-bold">
      Hello, {{ name }}
    </div>
    <div class="text-xl text-dgray mt-2 font-jakarta font-semibold ">
      Ready to timekeep your presentation today? :D
    </div>
  </div>
</template>
  
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
