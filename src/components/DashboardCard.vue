<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import "../style.css"
import styles from '../style';
import type { parse } from '@vue/compiler-dom';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';

export default {
    props: {
        title: String,
        date: String,
        last_modified: String,
        id: String,
    },
    methods: {
        parseDate(date: string) {
            const d = new Date(date)
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear()
        },
        parseLastModified(date: string) {
            dayjs.extend(relativeTime)
            return dayjs(date).fromNow()
        }
    }
}
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
                    {{ title || 'no props' }}
                </div>
                <div class="text-lg text-dgray mt-2 font-lato font-semibold">
                    <span v-if="date">{{ parseDate(date) }}</span>
                </div>
                <div class="text-sm text-dgray mt-2 font-lato font-regular opacity-60 italic">
                    <span v-if="last_modified">Last modified {{ parseLastModified(last_modified) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
