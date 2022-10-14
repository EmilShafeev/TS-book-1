import { log } from './se4'

// 1
type Fn1 = (arg1: string) => string

// 2
const fn2 = (...args: number[]) => args.reduce((prev, curr) => (prev = curr), 0)

// console.log(fn2(1, 2, 3, 4, 5))

// 3
type Reserve = {
    (from: Date, to: Date, destination: string): boolean
    (from: Date, destination: string): boolean
    (to: Date, destination: string): boolean
}

let reserve: Reserve = (
    fromOrTo: Date,
    fromOrDestination: Date | string,
    destination?: string
) => {
    return true
}

// 4

function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value)
}

function call<T extends unknown, R>(
    f: (arg1: T, arg2: string, ...args: T[]) => R,
    arg1: T,
    arg2: string,
    ...args: T[]
): R {
    return f(arg1, arg2, ...args)
}

// log(call(fill, 10, 's'))

import _ from 'lodash'
// 5
const is = <T>(...args: T[]) =>
    args.every(
        (value, index, arr) => index === 0 || _.isEqual(arr[index - 1], value)
    )

log(is(123, 123, 123))
log(is(123, 123, 123, 123))
log(is(123, 123, 1234))
log(is(['123', '123', '123'], ['123', '123', '123'], ['123', '123', '123']))
log(is(['123', '123', '123'], ['123', '123', '123'], ['123', '123']))
log(is(['123', '123', '123'], ['123', '123', '123'], ['123', '123', 123]))
