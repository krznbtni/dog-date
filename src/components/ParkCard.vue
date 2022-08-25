<template>
<ion-card>
  <ion-img :src="park.images[0]"></ion-img>
  <ion-card-header>
    <ion-card-title>{{park.name}} ({{park.distance}})</ion-card-title>
    <ion-card-subtitle>{{park.address.street}}, {{park.address.zip}}, {{park.address.city}}</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>{{park.description}}</ion-card-content>

  <ion-grid>
    <ion-row>
      <ion-col size="6">Underlag</ion-col>
      <ion-col>{{park.grounds.join(', ')}}</ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="6">Storlek</ion-col>
      <ion-col>{{park.size}}</ion-col>
    </ion-row>
  </ion-grid>
</ion-card>
</template>

<script lang="ts" setup>
import { IonGrid, IonRow, IonCol,IonCardContent, IonCard, IonCardSubtitle,IonCardTitle, IonCardHeader, IonImg} from '@ionic/vue'
import { defineProps } from 'vue';
import {IPark} from '@/types';

const props = defineProps<{park: IPark}>();
</script>
