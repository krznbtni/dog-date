<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{park.name}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{park.name}}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ParkCard :park="park" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ParkCard from '@/components/ParkCard.vue';
import {IPark} from '@/types';

const park: IPark = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  distance: '850m',
  grounds: ['grass', 'gravel'],
  images: ['/assets/hundrastgard.jpg'],
  name: 'Sorgenfrivägen',
  numCurrentVisitors: 5,
  rating: 4,
  size: '250m or something that makes sense',
  address: {
    street: 'Sorgenfrivägen',
    zip: '214 41',
    city: 'Malmö',
  },
};
</script>

<style>
</style>
