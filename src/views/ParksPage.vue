<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Parks</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Parks</ion-title>
        </ion-toolbar>
      </ion-header>

      <ParksList :parks="parks" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ParksList from '@/components/ParksList.vue'

const parks = [
  {name: 'Sorgenfrivägen'},
  {name: 'Rörsjöparken'},
  {name: 'Karlskronaplan'},
  {name: 'Enskifteshagen'},
]
</script>

<style>
</style>
