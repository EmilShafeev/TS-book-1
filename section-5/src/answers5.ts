// 3

interface Shoe {
    purpose: string
}

class BalletFlat implements Shoe {
    purpose = 'dancing'
}

class Boot implements Shoe {
    purpose = 'woodyboody'
}

class Sneaker implements Shoe {
    purpose = 'walking'
}

type Create = {
    (type: 'ballet'): BalletFlat
    (type: 'boot'): Boot
}

const create: Create = (type: 'ballet' | 'boot') => {
    switch (type) {
        case 'ballet':
            return new BalletFlat()
        case 'boot':
            return new Boot()
    }
}

const Shoe = {
    // create(type: 'ballet' | 'boot' | 'sneaker'): Shoe {
    //     switch (type) {
    //         case 'ballet':
    //             return new BalletFlat()
    //         case 'boot':
    //             return new Boot()
    //         case 'sneaker':
    //             return new Sneaker()
    //     }
    // },
    // createTyped(
    //     type: 'ballet' | 'boot' | 'sneaker'
    // ): BalletFlat | Boot | Sneaker {
    //     switch (type) {
    //         case 'ballet':
    //             return new BalletFlat()
    //         case 'boot':
    //             return new Boot()
    //         case 'sneaker':
    //             return new Sneaker()
    //     }
    // },
    create(type: 'ballet' | 'boot' | 'sneaker') {
        switch (type) {
            case 'ballet':
                return BalletFlat
            case 'boot':
                return new Boot()
            case 'sneaker':
                return new Sneaker()
        }
    },
}

const ballet = create('boot')

// 4

class AwsomeBuilder {
    protected someData: string | null = null
    protected someUrl: string | null = null

    setData(data: string) {
        return new AwsomeBuilderWithData().setData(data)
    }
}

class AwsomeBuilderWithData extends AwsomeBuilder {
    setData(data: string) {
        this.someData = data
        return this
    }
    setUrl(url: string) {
        return new AwsomeBuilderWithUrlAndData().setUrl(url)
    }
}
class AwsomeBuilderWithUrlAndData extends AwsomeBuilderWithData {
    setUrl(url: string) {
        this.someUrl = url
        return this
    }
    send() {
        if (!this.someUrl) throw new Error('Empty URL')
        console.log(`URL: ${this.someUrl}  |  data: ${this.someData}`)
    }
}

const builder = new AwsomeBuilder()
builder.setData('data').setUrl('url/afe/afe/3').send()
