const randomTargetNumber = (min, max) => {
    const newMax = max + 1
    const newMin = min - 1
    const target = Math.floor(Math.random() * (newMax - newMin) + newMin)
    
    return target
}

const generateArray = (min, max) => {
    const array = Array.from({length: max}, (_, i) => i + min)
    
    return array
}

const binarySearch = (target, array) => {
    let left = 0
    let right = array.length - 1

    while (left <= right) {
        let center = Math.floor((left + right) / 2)

        if (array[center] === target) {
            console.log(`Компьютер 1: ${array[center]}`)
            console.log('Компьютер 2: Угадал!')
            
            return center
        } else if (array[center] < target) {
            console.log(`Компьютер 1: ${array[center]}`)
            console.log('Компьютер 2: Больше!')
            left = center + 1
        } else {
            console.log(`Компьютер 1: ${array[center]}`)
            console.log('Компьютер 2: Меньше!')
            right = center - 1
        }
    }
    
    return 0
};


const min = 1
const max = 100
const target = randomTargetNumber(min, max)
const array = generateArray(min, max)

binarySearch(target, array)


