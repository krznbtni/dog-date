import { defineStore } from "pinia"
import { ref } from "vue"
import { IUser } from '@/types';

/**
 * ref()s become state properties
 * computed()s become getters
 * function()s become actions
 */

export const useUserStore = defineStore('user', () => {
  const users = ref(usersList);
  const user = users.value[0];

  return { user, users }
})

const usersList: Array<IUser> = [
  { id: 0, name: 'Karzan', petIds: [0] },
  { id: 1, name: 'Tim', petIds: [4] },
  { id: 2, name: 'Stefan', petIds: [1] },
  { id: 3, name: 'Anton', petIds: [3] },
];
