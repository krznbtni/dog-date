import { defineStore } from "pinia"
import { ref } from "vue"
import { IPet } from '@/types';

/**
 * ref()s become state properties
 * computed()s become getters
 * function()s become actions
 */

export const usePetStore = defineStore('pet', () => {
  const pets = ref(petsList);
  return { pets }
})

const petsList: Array<IPet> = [
  { id: 0, name: 'Bilbo', age: '4', images: ['../../public/assets/bilbo-1.jpg' ]},
  { id: 1, name: 'Paj', age: '3', images: ['../../public/assets/bilbo-1.jpg' ]},
  { id: 2, name: 'Sillen', age: '4', images: ['../../public/assets/bilbo-1.jpg' ]},
  { id: 3, name: 'Elton', age: '1.5', images: ['../../public/assets/bilbo-1.jpg' ]},
  { id: 4, name: 'Malte', age: '1', images: ['../../public/assets/bilbo-1.jpg' ]},
];
