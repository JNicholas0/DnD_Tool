import { singleOrIterableToIterable } from "./SingleOrIterableToIterable";
import '@testing-library/jest-dom'

describe("Test singleOrIterableToIterable", () => {
    test("Passing an iterable", () => {
        const expected = [1, 1, 2, 3, 5]
        const results = singleOrIterableToIterable(expected);
        for (let i = 0; i < 5; i++) {
            expect(results[i]).toStrictEqual(expected[i])
        }
    })

    test("Passing a single", () => {
        const expected = [78]
        const results = singleOrIterableToIterable(78);
        for (let i = 0; i < 5; i++) {
            expect(results[i]).toStrictEqual(expected[i])
        }
    })
})