<template>
  <ion-list>
    <ion-list-header> Recent Conversations </ion-list-header>
    <PetsListItem v-for="pet in pets" :key="pet.name" :pet="pet" />
  </ion-list>
</template>

<script lang="ts" setup>
import { IonList, IonListHeader } from '@ionic/vue';
import PetsListItem from '@/components/PetsListItem.vue';
import { defineProps } from 'vue';
import { IPet } from '@/types';

const props = defineProps<{pets: Array<IPet>}>();
</script>
