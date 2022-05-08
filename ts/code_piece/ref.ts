function ref<T = {}>(value: T): ToRef<T>
function ref<T>(value: T): Ref<UnwrapRef<T>>
function ref<T=any>(): Ref<T | undefined>
function ref(value?: unknown) {
  return createRef(value);
}