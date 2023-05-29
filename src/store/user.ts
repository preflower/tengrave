import { defineStore } from 'pinia'
import { User } from '@/entities/user'

export default defineStore('user', () => {
  const user = reactive<User>({})

  return {
    user: readonly(user)
  }
}, {
  persist: true
})
