function reactive<T extends object>(target: T): UnwrapNestRefs<T>
function reactive<T>(target: T): T {
  if (target && (target as Target)[ReactiveFlags].IS_READONLY) {
    return target;
  }
  return createReactiveObject({
    target,
    false,
    mutableHandlers,
    mutableCollectionHandler
  });
}