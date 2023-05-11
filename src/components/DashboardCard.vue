<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import "../style.css"
import styles from '../style';
</script>

<template>
    <div>
        <div class="bg-white w-full rounded-xl grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
            <div class="image">
                <div class="bg-orange w-full h-full p-5 rounded-xl">
                </div>
            </div>
            <div class="col-span-2 p-5">
                <div class="text-2xl text-black font-jakarta font-bold">
                    Presentation 1
                </div>
                <div class="text-lg text-dgray mt-2 font-lato font-semibold">
                    17 June 2023
                </div>
                <div class="text-sm text-dgray mt-2 font-lato font-regular opacity-60 italic">
                    Last modified 17 April 2023
                </div>
            </div>
        </div>
    </div>
</template>
