import { count, findFashion, removeDuplicated } from './functions'

const twoDaysExample = [
    ['sapato marron', 'calça rosa', 'camisa branca'], // day 1
    ['sapato marron', 'calça azul', 'camisa branca']  // day 2
]
const brownShoe = [
    { name: "camisa branca", amount: 2 },
    { name: "calça rosa", amount: 1 },
    { name: "calça azul", amount: 1 },
]

const names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']
const countResult = { Mike: 1, Matt: 1, Nancy: 2, Adam: 1, Jenny: 1, Carl: 1 }
const noDuplicatedResult = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Carl']

describe('Should get clothes more used with anothers clothes', () => {
    test('Get amount of each item in arr of names"', () => {
        expect(count(names))
            .toEqual(countResult)
    })

    test('Clothes used with "sapato marron"', () => {
        expect(findFashion(twoDaysExample, 'sapato marron'))
            .toEqual(brownShoe)
    })
})

test('Should remove duplicated items', () => {
    expect(removeDuplicated(names))
        .toEqual(noDuplicatedResult)
})