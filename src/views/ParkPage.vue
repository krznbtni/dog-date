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

interface Park {
  name: string,
  distance: string,
  size: string,
  images: string[],
  rating: number,
  numCurrentVisitors: number,
}

const park: Park = {
  name: 'Sorgenfrivägen',
  distance: '850m',
  size: '250m or something that makes sense',
  images: [
    '/assets/hundrastgard.jpg'
  ],
  rating: 4,
  numCurrentVisitors: 5
}

</script>

<style>
</style>
