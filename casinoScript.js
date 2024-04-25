const casButton = document.querySelector(".appButton");
const casLog = document.querySelector(".log");
const cellArr = document.querySelectorAll(".cell");
const imageArray = ["BillyHarington", "ricardo", "sorryForWhat", "steveRambo", "VanDarkholmovich"];

function random() {
    return Math.floor(Math.random() * 5); // Generates random number between 0 and 4 inclusive
}

casButton.addEventListener("click",  () => {
    cellArr.forEach((elem) => {
        const randomNumber = random(); // Generate random number once
        elem.innerHTML = `${randomNumber}`;
        elem.style.background = `url(images/${imageArray[randomNumber]}.jpg)`;
        elem.style.backgroundRepeat='no-repeat';
        elem.style.backgroundSize='cover';
    });

    setTimeout(()=>{
        winningCondition()
    },1000);
});

function winningCondition(){
    if (cellArr[0].innerHTML === cellArr[1].innerHTML && cellArr[1].innerHTML === cellArr[2].innerHTML) {
        alert("You win 1 million $");
    } else if (cellArr[0].innerHTML === cellArr[1].innerHTML || cellArr[0].innerHTML === cellArr[2].innerHTML || cellArr[1].innerHTML === cellArr[2].innerHTML) {
        alert("You win 500k $");
    } else {
        alert("You lose");
    }
}

console.log(cellArr);
