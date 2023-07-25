import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useUserStore = create(
  persist(
    (set, get) => ({
    }),
    {
      name: 'tengrave-user'
    }
  )
)

export default useUserStore
