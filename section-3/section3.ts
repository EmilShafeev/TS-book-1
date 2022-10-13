class TestClass {
    constructor(
        public a: string,
        public b?: string,
        public c?: string,
        public d?: string
    ) {}
}

const t = new TestClass('a')

t.b
