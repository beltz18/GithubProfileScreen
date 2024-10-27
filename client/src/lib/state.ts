import { create } from 'zustand'
import { StatePages } from '@typ/State'

const useStorePages = create<StatePages>() ((set) => ({
  pages: 0,
  current: 0,
  setPages: (pages: number) => set(() => ({ pages: Math.floor(pages/10) })),
  plus: () => set((state) => ({ current: state.current+1 })),
  minus: () => set((state) => ({ current: state.current-1 })),
}))

export { useStorePages }