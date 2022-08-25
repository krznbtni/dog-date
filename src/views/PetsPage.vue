<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Pets</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Pets</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <PetsList :pets="pets" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import PetsList from '@/components/PetsList.vue';
import {usePetStore} from '@/stores/pet';
import { storeToRefs } from 'pinia'

const store = usePetStore()
const { pets } = storeToRefs(store)
</script>
