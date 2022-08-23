<template>
  <ion-list>
    <ParksListItem v-for="park in parks" :key="park.name" :park="park" />
  </ion-list>
</template>

<script lang="ts" setup>
import {IonList} from '@ionic/vue'
import ParksListItem from '@/components/ParksListItem.vue';
import { defineProps } from 'vue';

const props = defineProps<{parks: {name: string}[]}>();
</script>
