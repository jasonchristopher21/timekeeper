<script lang="ts">
import DashboardCard from "../components/DashboardCard.vue"
import Navbar from "../components/Navbar.vue"
export default {
  data() {
    return {
      name: "Jason"
    }
  },
  components: {
    DashboardCard,
    Navbar,
  }
}
</script>

<template>
  <Navbar />
  <div class="px-10 py-10">
    <div class="header">
      <div class="text-4xl text-black font-jakarta font-bold">
        Presentation Name
      </div>
      <div class="text-xl text-dgray mt-2 font-jakarta font-semibold ">
        Ready to timekeep your presentation today? :D
      </div>
    </div>
    <div class="grid grid-cols-3 gap-5 mt-10">
      <DashboardCard />
      <DashboardCard />
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
