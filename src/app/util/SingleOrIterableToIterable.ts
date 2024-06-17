export function singleOrIterableToIterable<T>(
  arg: T | Iterable<T>
): Iterable<T> {
    if (Symbol.iterator in Object(arg)) {
        return arg as Iterable<T>
    } else {
        return [arg as T]
    }
}
