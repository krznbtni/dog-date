<template>
  <ion-item>
    <ion-avatar slot="start">
      <img src="../../public/assets/bilbo-1.jpg" />
    </ion-avatar>
    <ion-label>
      <h2>{{ pet.name }}, {{ pet.age }}</h2>
    </ion-label>
  </ion-item>
</template>

<script lang="ts" setup>
import { IonItem, IonAvatar, IonLabel } from '@ionic/vue';
import {defineProps} from 'vue';

const props = defineProps<{pet: {name: string, age: string, img: string}}>();
</script>
