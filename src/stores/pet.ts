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
  {
    id: 0,
    name: 'Bilbo',
    age: '4',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images: ['../assets/bilbo-1.jpg' ],
    size: 'large',
    breed: 'lurcher',
    activityLevel: 'high',
    type: 'sighthound'
  },
  {
    id: 1,
    name: 'Paj',
    age: '3',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images: ['../assets/bilbo-1.jpg' ],
    size: 'large',
    breed: 'lurcher',
    activityLevel: 'high',
    type: 'sighthound'
  },
  {
    id: 2,
    name: 'Sillen',
    age: '4',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images: ['../assets/bilbo-1.jpg' ],
    size: 'large',
    breed: 'lurcher',
    activityLevel: 'high',
    type: 'sighthound'
  },
  {
    id: 3,
    name: 'Elton',
    age: '1.5',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images: ['../assets/bilbo-1.jpg' ],
    size: 'large',
    breed: 'lurcher',
    activityLevel: 'high',
    type: 'sighthound'
  },
  {
    id: 4,
    name: 'Malte',
    age: '1',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images: ['../assets/bilbo-1.jpg' ],
    size: 'large',
    breed: 'lurcher',
    activityLevel: 'high',
    type: 'sighthound'
  },
];
