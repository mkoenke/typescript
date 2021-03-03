class Vehicle {
  // public drive(): void{
  //   console.log("chugga chugga")
  // }
  protected honk(): void {
    console.log("beep beep")
  }


  // color: string = "red"

  // color: string
  // constructor(color: string){
  //   this.color = color
  // }

  constructor(public color: string){}

}

const vehicle = new Vehicle("orange")
console.log(vehicle.color)
// vehicle.drive()
// vehicle.honk()

class Car extends Vehicle {
  constructor(public wheels: number, color :string){
    super(color)
  }
  private drive(): void {
    console.log("vrooooooom")
  }

  startDrivingProcess(): void{
    this.drive()
  }
}


const anotherCar = new Car(4, "red")
anotherCar.startDrivingProcess()
// anotherCar.honk()
