//?-------.filter()
const animals = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"]

const filteredAnimals = animals.filter((oneAnimal) => {
    if (oneAnimal.length <= 5) {
        return true
    } else {
        return false
    }
})
const filteredAnimals2 = animals.filter((oneAnimal) => {
    return oneAnimal.length <= 5
})

console.log(filteredAnimals2)