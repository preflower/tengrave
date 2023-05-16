import { defineStore } from 'pinia'
import storage from '@/composables/storage'
import { User } from '@/entities/user'

const STORAGE_KEY = 'user'

export default defineStore('user', () => {
  const userInfo = storage.get<User>(STORAGE_KEY)

  const user = reactive<User>({})

  watch(
    () => user,
    () => {
      storage.set(STORAGE_KEY, user)
    },
    {
      deep: true
    }
  )

  return {
    user: readonly(user)
  }
})
