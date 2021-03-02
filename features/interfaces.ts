// interface Vehicle {
//   name: string;
//   year: number; // Date
//   broken: boolean;
//   summary(): string
// }

interface Reportable { 
  summary(): string
}


const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

const someDrink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`
  }
}

// const printVehicle = (vehicle: { name: string; year: number; broken: boolean}): void => {
//   const printVehicle = (vehicle: Vehicle): void => {

//   console.log(`Name: ${vehicle.name} `)
//   console.log(`Year: ${vehicle.year}`)
//   console.log(`Broken? ${vehicle.broken}`)
//   console.log(`${vehicle.summary}`)
// }

// printVehicle(oldCivic)

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printSummary(oldCivic)
printSummary(someDrink)

//General strategy for code reuse
// 1. create functions that accept arguments that are typed with interfaces
// 2. objects/classes can decide to "implement" a given interface to work with a function