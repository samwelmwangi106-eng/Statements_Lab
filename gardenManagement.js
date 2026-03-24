const temperature = 90;

if (temperature>=80){
    console.log("Watering on")
}
else  {
    console.log("Watering off")
}
const timeOfDay = "morning";

if (timeOfDay === "evening" || timeOfDay === "night") {
    console.log("Lights on");
} else {
    console.log("Lights off");
}

let soilMoisture = 30;

while (soilMoisture < 40) {
    soilMoisture += 5;
    console.log(soilMoisture);
}


