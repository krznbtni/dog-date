<template>
<ion-card>
  <ion-img class="image" :src="pet.images[0]" />

  <ion-card-header>
    <ion-card-title>{{pet.name}}</ion-card-title>
    <ion-card-subtitle>subtitle</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>{{pet.bio}}</ion-card-content>

  <ion-grid>
    <ion-row>
      <ion-col size="6">Ålder</ion-col>
      <ion-col>{{pet.age}}</ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="6"></ion-col>
      <ion-col></ion-col>
    </ion-row>
  </ion-grid>
</ion-card>
</template>

<script lang="ts" setup>
import { IonImg, IonCol, IonGrid, IonRow, IonCardContent, IonCard, IonCardSubtitle,IonCardTitle, IonCardHeader } from '@ionic/vue'
import { defineProps } from 'vue';
import {IPet} from '@/types';

const props = defineProps<{pet: IPet}>();
</script>

<style>
.image {
  margin: 0 auto 0 auto;
  width: 50%;
}
</style>
