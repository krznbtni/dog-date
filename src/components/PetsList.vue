<template>
  <ion-list>
    <ion-list-header> Recent Conversations </ion-list-header>

    <PetsListItem v-for="pet in pets" :key="pet.name" :pet="pet" />
  </ion-list>
</template>

<script lang="ts">
import { IonList } from '@ionic/vue';
import { warning } from 'ionicons/icons';
import { defineComponent } from 'vue';
import PetsListItem from '@/components/PetsListItem.vue';

export default defineComponent({
  components: {IonList, PetsListItem },
  setup() {
    return { warning,
    
    pets: [{name: 'Bilbo', age: '4', img: '../../public/assets/bilbo-1.jpg'}]};
  }
});
</script>
