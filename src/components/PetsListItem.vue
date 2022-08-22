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

<script lang="ts">
import { IonItem } from '@ionic/vue';
import { warning } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonItem },
  props: {
    pet: {
      type: Object,
    },
  },
  setup() {
    return {
      warning,
    };
  }
});
</script>
