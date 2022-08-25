<template>
<ion-card>
  <ion-img class="image" :src="pet.images[0]" />

  <ion-card-header>
    <ion-card-title>{{pet.name}}</ion-card-title>
    <ion-card-subtitle>subtitle</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>{{pet.bio}}</ion-card-content>

  <ion-grid class="grid">
    <ion-row>
      <ion-col size="6" class="ion-align-self-start">Age</ion-col>
      <ion-col  class="ion-align-self-end">{{pet.age}}</ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="6" class="ion-align-self-start">Size</ion-col>
      <ion-col  class="ion-align-self-end">{{pet.size}}</ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="6" class="ion-align-self-start">Type</ion-col>
      <ion-col  class="ion-align-self-end">{{pet.type}}</ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="6" class="ion-align-self-start">Breed</ion-col>
      <ion-col  class="ion-align-self-end">{{pet.breed}}</ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="6" class="ion-align-self-start">Activity Level</ion-col>
      <ion-col  class="ion-align-self-end">{{pet.activityLevel}}</ion-col>
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
  width: 300px;
  height: 300px;
}

.grid {
  padding: 5px 15px 15px 15px;
}
</style>
