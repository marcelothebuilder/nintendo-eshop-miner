declare module "promise-serial" {
  export default function <PromiseReturn>(
    promises: (() => Promise<PromiseReturn>)[],
    configuration?: { parallelize: number },
  ): PromiseReturn[];
}
