<template>
<ion-card>
  <ion-img :src="pet.images[0]" />
  <!-- <img src="../../public/assets/bilbo-1.jpg" /> -->
  <ion-card-header>
    <ion-card-title>{{pet.name}}</ion-card-title>
    <ion-card-subtitle>subtitle</ion-card-subtitle>
  </ion-card-header>

</ion-card>
</template>

<script lang="ts" setup>
import { IonImg, IonCard, IonCardSubtitle,IonCardTitle, IonCardHeader } from '@ionic/vue'
import { defineProps } from 'vue';
import {IPet} from '@/types';

const props = defineProps<{pet: IPet}>();
</script>

