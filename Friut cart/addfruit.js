fruits = [];

let apple = 0;
let banana = 0;
let grape = 0;
let orange = 0;

function addApple() {
  fruits.push("apple");
  apple++;
  document.getElementById("output").innerHTML = "Total items:  " + apple;
}

function addBanana() {
  fruits.push("banana");
  banana++;
  document.getElementById("output1").innerHTML = "Total items: " + banana;
}

function addGrapes() {
  fruits.push("grape");
  grape++;
  document.getElementById("output2").innerHTML = "Total items: " + grape;
}

function addOranges() {
  fruits.push("orange");
  orange++;
  document.getElementById("output3").innerHTML = "Total items: " + orange;
}

document.getElementById("addApple").addEventListener("click", addApple);
document.getElementById("addBanana").addEventListener("click", addBanana);
document.getElementById("addGrapes").addEventListener("click", addGrapes);
document.getElementById("addOranges").addEventListener("click", addOranges);

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("output").innerHTML = "Total items: 0";
  fruits = [];
  apple = 0;
});

document.getElementById("reset1").addEventListener("click", function () {
  document.getElementById("output1").innerHTML = "Total items: 0";
  fruits = [];
  banana = 0;
});

document.getElementById("reset2").addEventListener("click", function () {
  document.getElementById("output2").innerHTML = "Total items: 0";
  fruits = [];
  grape = 0;
});

document.getElementById("reset3").addEventListener("click", function () {
  document.getElementById("output3").innerHTML = "Total items: 0";
  fruits = [];
  orange = 0;
});
