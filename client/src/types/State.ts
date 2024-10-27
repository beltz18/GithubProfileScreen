export type StatePages = {
  pages: number,
  current: number,
  setPages: (pages: number) => void,
  plus: () => void,
  minus: () => void,
}

export type StateFollow = {
  follow: boolean,
  setFollow: () => void
}