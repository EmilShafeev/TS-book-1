//3
type O = { a: { b: { c: string } } }

//4

type Exclusive<T, U> = Exclude<T, U> | Exclude<U, T>

let a: Exclusive<string, boolean> = 'sd'

type b = 'string' | boolean
type c = { a: string; b: number }

type R = Record<'someKey' | 'someKey2', string>
type P = Partial<c>
type Req = Required<P>
type Ro = Readonly<c>
type Pi = Pick<c, 'a'>

type A = string | number | undefined
type B = string

type C1 = Exclude<A, B>
type C2 = Extract<A, B>
type C3 = NonNullable<A>
type C4 = ReturnType<(a: any) => string>
type C5 = InstanceType<{ new (): string }>

//

class CTOR {}

type tCtor = new () => CTOR

let lCtor: tCtor = CTOR

type test = InstanceType<tCtor>
