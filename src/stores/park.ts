import { defineStore } from "pinia"
import { ref } from "vue"
import {IPark} from '@/types';

/**
 * ref()s become state properties
 * computed()s become getters
 * function()s become actions
 */

export const useParkStore = defineStore('park', () => {
  const parks = ref(parksList);
  return { parks }
})

const parksList: Array<IPark> = [
  {
    id: 0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    distance: '850m',
    grounds: ['grass', 'gravel'],
    images: ['../assets/hundrastgard.jpg'],
    name: 'Sorgenfrivägen',
    numCurrentVisitors: 5,
    rating: 4,
    size: '250m or something that makes sense',
    address: {
      street: 'Sorgenfrivägen',
      zip: '214 41',
      city: 'Malmö',
    },
  },
  {
    id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    distance: '850m',
    grounds: ['grass', 'gravel'],
    images: ['../assets/hundrastgard.jpg'],
    name: 'Rörsjöparken',
    numCurrentVisitors: 5,
    rating: 4,
    size: '250m or something that makes sense',
    address: {
      street: 'Sorgenfrivägen',
      zip: '214 41',
      city: 'Malmö',
    },
  },
  {
    id: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    distance: '850m',
    grounds: ['grass', 'gravel'],
    images: ['../assets/hundrastgard.jpg'],
    name: 'Karlskronaplan',
    numCurrentVisitors: 5,
    rating: 4,
    size: '250m or something that makes sense',
    address: {
      street: 'Sorgenfrivägen',
      zip: '214 41',
      city: 'Malmö',
    },
  },
  {
    id: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    distance: '850m',
    grounds: ['grass', 'gravel'],
    images: ['../assets/hundrastgard.jpg'],
    name: 'Enskifteshagen',
    numCurrentVisitors: 5,
    rating: 4,
    size: '250m or something that makes sense',
    address: {
      street: 'Sorgenfrivägen',
      zip: '214 41',
      city: 'Malmö',
    },
  },
];
