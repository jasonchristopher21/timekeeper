<script lang="ts">
import type EditDeckCardVue from "@/components/EditDeckCard.vue"
import DashboardCard from "../components/DashboardCard.vue"
import Navbar from "../components/Navbar.vue"
import EditDeckCard from "../components/EditDeckCard.vue"
import { getSpecificDeck } from "@/services/DeckService"

export default {
  data() {
    return {
      name: "Jason",
      deck: { id: "", name: "", date: "", last_modified: "" },
    }
  },
  components: {
    DashboardCard,
    Navbar,
    EditDeckCard
  },
  methods: {
    getSpecificDeck(deckId : string) {
      getSpecificDeck(deckId).then(response => { this.deck = response })
    }
  },
  mounted() {
    const id : string = this.$route.params.id as string
    this.getSpecificDeck(id)
  }
}
</script>

<template>
  <Navbar />
  <div class="px-10 py-10">
    <div class="header">
      <div class="text-4xl text-black font-jakarta font-bold">
        {{ deck.name }}
      </div>
      <div class="text-xl text-dgray mt-2 font-jakarta font-semibold ">
        Total time: <b>XX:XX</b>
      </div>
    </div>

    <!-- TIME CARDS -->
    <div class="mt-10">
      <EditDeckCard />
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
