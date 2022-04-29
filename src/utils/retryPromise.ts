// Challenge 3
// This challenge is not completely clear for me
// For now I assume the first function passed is the requestfunction that returns a promise
// The second function is the predicate function, and we need to continue making the request if the predicate function returns true
// The third parameter is amount of times request needs to be executed if predicate function didnt fail earlier

export async function retryAgainPromise<S>(
  promiseFunction: () => Promise<unknown>,
  predicateFunction: (requestResult: unknown) => boolean,
  retryNumber: number,
) {
  for (let index = 0; index < retryNumber; index++) {
    try {
      const promiseResult = await promiseFunction()
      if (!predicateFunction(promiseResult)) throw new Error('something else')
    } catch (error) {
      console.error(error)
    }
  }
}
