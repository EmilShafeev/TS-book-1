import _ from 'lodash'

describe('Lodash test', () => {
    test('array equal', () => {
        const arr1 = [1, 2]
        const arr2 = [1, 2]
        expect(_.isEqual(arr1, arr2)).toBeTruthy()
    })
    test('array not equal', () => {
        const arr1 = [1, 2]
        const arr2 = [1, 3]
        expect(_.isEqual(arr1, arr2)).not.toBeTruthy()
    })
    test('value not equal', () => {
        const val1 = 1
        const val2 = 'e'
        expect(_.isEqual(val1, val2)).not.toBeTruthy()
    })
})
