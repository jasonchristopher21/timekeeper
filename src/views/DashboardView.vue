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
    <div class="text-3xl text-black">
      Hello, {{ name }}
    </div>
    <div class="text-lg text-black mt-2">
      What would you like to timekeep today?
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
