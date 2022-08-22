<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="undecided" href="/undecided">
          <ion-icon :icon="triangle" />
          <ion-label>Undecided</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="map" href="/map">
          <ion-icon :icon="ellipse" />
          <ion-label>Map</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="pets" href="/pets">
          <ion-icon :icon="square" />
          <ion-label>Pets</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  }
});
</script>
