const carMakers = ["ford", "toyota", "chevy"]
// if initializing an empty array, use annotation
const otherCars: string[] = []

const dates = [new Date(), new Date()]

// const carsByMake = [
//   ["f150"],
//   ["corolla"],
//   ["camaro"]
// ]
const carsByMake: string[][] = []
/// help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

//prevent incompatible values
carMakers.push(100)

//help with "map", "forEach", "reduce"
carMakers.map((car: string): string => {
  return car.toUpperCase()
})

//Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"]
importantDates.push("2010-10-10")
importantDates.push(new Date())
