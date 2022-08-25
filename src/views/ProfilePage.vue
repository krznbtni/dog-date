<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Profile</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <PetsList :pets="userPets" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user';
import {usePetStore} from '@/stores/pet';
import PetsList from '@/components/PetsList.vue';

const petStore = usePetStore()
const { pets } = storeToRefs(petStore)

const userStore = useUserStore();
const {user} = storeToRefs(userStore);

const userPets = pets.value.filter((pet) => user.value.petIds.includes(pet.id));
</script>
