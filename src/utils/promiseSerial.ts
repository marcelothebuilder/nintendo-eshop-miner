type PromiseReturningFunction<ArrayElement> = () => Promise<ArrayElement[]>;

export const promiseSerial = <ArrayElement>(functions: PromiseReturningFunction<ArrayElement>[]) =>
  functions.reduce(
    (promise, promiseReturningFunction) =>
      promise.then((result) => promiseReturningFunction().then((arrayResult) => result.concat(arrayResult))),
    (Promise.resolve([]) as unknown) as Promise<Array<ArrayElement>>,
  );
