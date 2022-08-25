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
import {useRoute} from "vue-router";
import {useParkStore} from '@/stores/park';
import { storeToRefs } from 'pinia'

const route = useRoute();
const store = useParkStore()
const { parks } = storeToRefs(store)

const {name} = route.params;
const park = parks.value.find((p) => p.name === name);
</script>

<style>
</style>
