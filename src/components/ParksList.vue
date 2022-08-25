<template>
  <ion-list>
    <ParksListItem v-for="park in parks" :key="park.name" :park="park" />
  </ion-list>
</template>

<script lang="ts" setup>
import {IonList} from '@ionic/vue'
import ParksListItem from '@/components/ParksListItem.vue';
import {useParkStore} from '@/stores/park';
import { storeToRefs } from 'pinia'

const store = useParkStore()

// `name` and `doubleCount` are reactive refs
// This will also create refs for properties added by plugins
// but skip any action or non reactive (non ref/reactive) property
const { parks } = storeToRefs(store)
</script>
