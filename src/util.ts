/**
 * generates rows for a bottom-aligned row-col system
 *
 * yes i know its column
 * @param original an array of something
 * @param cols the amount of cols, defaults to 2
 * @returns an array of arrays
 */
export const bottomColon = <T>(original: T[], cols = 2): Array<T[]> => {
  const reversed = [...original].reverse()
  const ret = []
  let row = []

  for (let i = 0; i < reversed.length; i++) {
    const v = reversed[i]
    row.push(v)

    if (i % cols) {
      ret.push([...row].reverse())
      row = []
    }
  }

  ret.push(row)

  return [...ret].reverse()
}
