const add = (a: number, b: number) => {
  return a + b
}
// no type inference for arguemnts, always type inference for return values 

const subtract = (a:number, b:number): number => {
  return a - b
}

function divide(a: number, b:number ): number{
  return a / b

}

const multiply = function(a: number, b: number): number {
  return a * b
}

const logger = (message: string): void => {
  console.log(message)
}

const throwError = (message: string): never => {
  throw new Error(message)
}

const throwAnotherError = (message: string): void => {
  if(!message){
    throw new Error(message)
  }
}

const todaysWeather = {
  date: new Date(),
  weather: "sunny"
}

const logWeather = ({date, weather}: { date: Date, weather: string }): void => {
  console.log(date)
  console.log(weather)
}

//ES2015
// const logWeather = ({ date, weather}): void => {
//   console.log(date)
//   console.log(weather)
// }

logWeather(todaysWeather)