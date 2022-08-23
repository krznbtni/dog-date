<template>
<ion-card>
  <ion-img :src="park.images[0]"></ion-img>
  <ion-card-header>
    <ion-card-title>{{park.name}}</ion-card-title>
    <ion-card-subtitle>{{park.distance}}</ion-card-subtitle>
  </ion-card-header>
</ion-card>
</template>

<script lang="ts" setup>
import {IonCard, IonCardSubtitle,IonCardTitle, IonCardHeader, IonImg} from '@ionic/vue'
import { defineProps } from 'vue';

interface Park {
  name: string,
  distance: string,
  size: string,
  images: string[],
  rating: number,
  numCurrentVisitors: number,
}

const props = defineProps<{park: Park}>();
</script>
