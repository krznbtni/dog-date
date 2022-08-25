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

const petsList: Array<IPet> =  [
  {name: 'Bilbo', age: '4', img: '../../public/assets/bilbo-1.jpg'},
  {name: 'Paj', age: '3', img: '../../public/assets/bilbo-1.jpg'},
  {name: 'Sillen', age: '4', img: '../../public/assets/bilbo-1.jpg'},
  {name: 'Elton', age: '1.5', img: '../../public/assets/bilbo-1.jpg'},
];
