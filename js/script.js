var petName = prompt("Pet's name:");
var happiness = 0;
var energy = 0;
for (let attempts = 6; attempts > 0; attempts--) {
    var action = prompt("Feed, pet, or walk?");
    action = action.toLowerCase();
    if (action==="feed") {
        alert("Energy increased by 2!");
        energy +=2;
    }
    if (action==="pet") {
        alert("Happiness increased by 1!");
        happiness +=1;
    }
    if (action==="walk") {
        if (energy === 0) {
            alert("Not enough energy to enjoy a walk.");
            } else {
                alert("Happiness increased by 2, energy decreased by 1!");
                happiness +=2;
                energy -=1;
            }
    } else {
        alert("Invalid input!");
    }
}
console.log(petName + " has " + happiness + " happiness and " + energy + " energy.");