<script lang="ts">
import DashboardCard from "../components/DashboardCard.vue"
import Navbar from "../components/Navbar.vue"
import { getAllDecks, createDeck } from "@/services/DeckService"

export default {
  data() {
    return {
      name: "Jason",
      decks: [{ id: "", name: "", date: "", last_modified: "" }],
      numberOfDecks: 0,
    }
  },
  components: {
    DashboardCard,
    Navbar,
  },
  methods: {
    getAllDecks() {
      getAllDecks().then(response => {
        this.decks = response
        this.numberOfDecks = this.decks.length
      })
    }
  },
  mounted() {
    this.getAllDecks()
  }
}
</script>

<template>
  <Navbar />
  <div class="px-10 py-10">
    <div class="header">
      <div class="text-4xl text-black font-jakarta font-bold">
        Hello, {{ name }}
      </div>
      <div class="text-xl text-dgray mt-2 font-jakarta font-semibold ">
        Ready to timekeep your presentation today? :D
      </div>
    </div>
    <div class="grid grid-cols-3 gap-5 mt-10">
      <DashboardCard 
        v-for="(data, index) in decks" 
        :key="index" 
        :id="data.id"
        :title="data.name" 
        :date="data.date" 
        :last_modified="data.last_modified"
      ></DashboardCard>
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
