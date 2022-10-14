export const log = console.log

type Filter = { <T>(arr: T[], f: (item: T) => boolean): T[] }

const filter: Filter = (arr, f) => arr.filter(f)

// log(filter([23, 324], (i) => i > 0))
log([23, undefined, 'asdasd'].filter((i) => i))
