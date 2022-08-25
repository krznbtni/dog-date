<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="undecided" href="/undecided">
          <ion-icon :icon="triangle" />
          <ion-label>Undecided</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="map" href="/parks">
          <ion-icon :icon="ellipse" />
          <ion-label>Parks</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="profile" href="/profile">
          <ion-icon :icon="square" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
