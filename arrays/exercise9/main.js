
let car = {
    make: "BMW",
    model: "X5",
    Year: 2026,
    start: function(){
        console.log("The "+ this.make + " Car has started");
    }
}

car.start();