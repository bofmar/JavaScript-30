const pressed = [];
const secretCode = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba"
//Above is Konami code

//const secretCode = "mario"

window.addEventListener("keyup", (e) =>{
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
  /*if(pressed.join("").includes(secretCode)){
    document.querySelector("body").textContent = "You did it!";
  }*/
});