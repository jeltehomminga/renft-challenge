export const partition = <S>(ary: S[], callback: (arg0: S) => S) =>
  ary.reduce<[S[], S[]]>(
    (acc, e) => {
      acc[callback(e) ? 0 : 1].push(e)
      return acc
    },
    [[], []],
  )
