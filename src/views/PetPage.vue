<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{pet.name}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{pet.name}}</ion-title>
        </ion-toolbar>
      </ion-header>

      <PetCard :pet="pet" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import PetCard from '@/components/PetCard.vue';
import {useRoute} from "vue-router";
import {usePetStore} from '@/stores/pet';
import { storeToRefs } from 'pinia'

const route = useRoute();
const store = usePetStore()
const { pets } = storeToRefs(store)

const {name} = route.params;
const pet = pets.value.find((p) => p.name === name);
</script>

<style>
</style>
