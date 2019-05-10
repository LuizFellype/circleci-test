export const count = names =>
    names.reduce((acc, item) => (
        { ...acc, [item]: (acc[item] || 0) + 1 }
    ), {})


export const findFashion = (arrDaysWithClothes, clothesReference) => {
    // Get all clothes used with clothesReference
    const daysWithClothesReference = arrDaysWithClothes.filter(clothes => clothes.includes(clothesReference))
    const usedWithClothesReference = daysWithClothesReference.map(clothes =>
        clothes.filter(clothesName => clothesName !== clothesReference)
    ).join().split(',')

    // Preparete data to format
    const amountOfEachClothes = count(usedWithClothesReference) // { camisa branca: 2, 'calça rosa': 1, 'calça azul':  }
    const clothesNames = Object.keys(amountOfEachClothes)
    const data = clothesNames.map(name => ({ name, amount: amountOfEachClothes[name] }))

    // Format data - amount > alphabetical order 
    const amountOrdered = data.sort((next, before) => before.amount - next.amount)
    return amountOrdered
}

export const removeDuplicated = (arr) =>
    arr.filter((elem, pos, self) => self.indexOf(elem) === pos
    )

