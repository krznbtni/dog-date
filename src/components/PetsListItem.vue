<template>
  <ion-item button detail :href="`/profile/pets/${pet.name}`">
    <ion-avatar slot="start">
      <ion-img :src="pet.images[0]" />
    </ion-avatar>
    <ion-label>
      <h2>{{ pet.name }}</h2>
    </ion-label>
  </ion-item>
</template>

<script lang="ts" setup>
import { IonImg, IonItem, IonAvatar, IonLabel } from '@ionic/vue';
import {defineProps} from 'vue';
import { IPet } from '@/types';

const props = defineProps<{pet: IPet}>();
</script>
