<template>
  <ion-item button detail :href="`/parks/${park.name}`">
    <ion-label>
      <h2>{{ park.name }}</h2>
    </ion-label>
  </ion-item>
</template>

<script lang="ts" setup>
import { IonItem, IonLabel } from '@ionic/vue';
import { defineProps } from 'vue';

const props = defineProps<{park: {name: string}}>();
</script>
