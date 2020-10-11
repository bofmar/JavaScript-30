const dogs = [{name: "Snickers", age:2}, {name:"Hugo", age: 8}];

function makeGreen(){
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string", "good");

// Styled
//console.log("%c I am some great text", "font-size: 50px; background: red; text-shadow: 10px 10px 0 blue;")

// warning!
console.warn("OH NOOOOO");

// Error :|
console.error("DOUBLE OH NOOOOOO!!! :|")

// Info
console.info("Crocodiles eat three to four people per year");

// Testing
console.assert(1 === 1, "that is wrong");

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector("p");
console.log(p);
//console.dir(p);

// Grouping together
dogs.forEach( dog =>{
    console.groupCollapsed(`${dog.name}`);
    console.log(dog.name);
    console.log(dog.age);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Wes");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos").then(data => data.json).then(data =>{
    console.timeEnd("fetching data");
});