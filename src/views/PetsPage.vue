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
      
      <PetsList />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import PetsList from '@/components/PetsList.vue';

export default defineComponent({
  name: 'Tab3Page',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, PetsList }
});
</script>
