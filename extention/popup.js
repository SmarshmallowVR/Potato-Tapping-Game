chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local') {
    if (changes.current) {
      collected.innerText = changes.current.newValue;
    }
    if (changes.totalOfAll) {
      allOfPotatoes.innerText = changes.totalOfAll.newValue;
    }
    if (changes.multiplying) {
      multiply.innerText = changes.multiplying.newValue;
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  
  let numOfClicks = 0;
let collected = document.getElementById("theNumber");
let potatoClicked = document.getElementById("potato");
let settings = document.getElementById("settings");
let something = document.getElementById("hide");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let sound = document.getElementById("sound");
let sounding = document.getElementById("sounding");
let soundBool = true;
let music = document.getElementById("music");
let theme = document.getElementById("theme");
let themed = document.getElementById("themed");
let stats = document.getElementById("Stats");
let stat = document.getElementById("stat");
let total = document.getElementById("totalPotatoes");
let currentPotatoes = 0;
let needed = 100; //Why Did I Add This, Im Sure It Was One Of My Dumb Ideas
let multiply = document.getElementById("multiply");
let multiplier = 1;
let multiplierDisplay = document.getElementById("multiplier");
let sacrifice = document.getElementById("sacrifice");
let math = 100; //i love variable i dont know if i need
let numberOfSacrifices = 0;
let required = 50;
let multiplyMultiplier = document.getElementById("multiplyMultiplier");
let multiplierx2 = document.getElementById("multiplierx2");
let sacrificesDone = document.getElementById("sacrificesDone");
let requiredx2x2 = document.getElementById("requiredx2");
let requiredx2 = 1000;
let allOfPotatoes = document.getElementById("allOfThePotatoes");
let allPotatoes = 0;
let mutedSettings = false;
let sizeOfPage = 1;
let totalAway = 0;//i love variable i dont know if i need pt2
let awayAway = 0;//i love variable i dont know if i need pt3
let mini = 1;
let big = 10;
let answer = 1;
let eventActive = false;
let pain = true;
let SFX = true;
let sfxDiv = document.getElementById("sfx");
let sfxImige = document.querySelector(".sfxImige");

multiply.innerText = "1";
// here to the next comment are just for testing
function isString(variableString) {
  return typeof variableString === "string";
}
//im doubting these work well... (the next comment)
function isInt(variableInt) {
  return Number.isInteger(variableInt);
}
// the next comment (like this is the comment oraganly[im so good at spelling] mentioned)

function potatoAnimation() {
  potatoClicked.classList.add('run-animation');
  setTimeout(function() {
  potatoClicked.classList.remove('run-animation');
  }, 100);
}

function randomEvent(min, max) {
 answer =  Math.floor(Math.random() * (max - min + 1)) + min;
 if (answer == 5) {
  multiplier = Math.round(multiplier + (multiplier * 2));
  potatoClicked.style.cursor = "grab";
  multiply.innerText = multiplier;
  fille.style.backgroundColor = "rgba(145, 161, 0, 1)";
  eventActive = true;
  setTimeout(function() {
  multiplier = multiplier / 3;
  potatoClicked.style.cursor = "pointer";
  multiply.innerText = multiplier;
  console.log("if you see this the function ran, lets hope other things happened as well...");
  eventActive = false;
  if (dark) {
fille.style.backgroundColor = "rgba(206, 206, 206, 1)";
  } else {
fille.style.backgroundColor = "#292928";
  }
  }, 10000)
 }
};

setInterval(function() { 
  randomEvent(mini, big);
  console.log("well this parts working i guess...");
 }, 10000);

chrome.storage.local.get(["sizeThings"], (result) => {
sizeOfPage = result.sizeThings || 1;
if (sizeOfPage == 1) {
document.getElementById("potato").style.width = "150px";
document.getElementById("potato").style.height = "auto";
} else if (sizeOfPage == 2) {
  document.getElementById("potato").style.width = "200px";
document.getElementById("potato").style.height = "auto";
} else if (sizeOfPage == 3) {
document.getElementById("potato").style.width = "250px";
document.getElementById("potato").style.height = "auto";
} else if (sizeOfPage == 4) {
document.getElementById("potato").style.width = "300px";
document.getElementById("potato").style.height = "auto";
} else if (sizeOfPage == 5) {
document.getElementById("potato").style.width = "350px";
document.getElementById("potato").style.height = "auto";
} else {
alert("It Appears Something Went Wrong, Please Select A New Size For The Page In Settings.");
document.getElementById("potato").style.width = "250px";
document.getElementById("potato").style.height = "auto";
}
});

chrome.storage.local.get(["totalOfAll"], (result) => {
allPotatoes = result.totalOfAll || 0;
allPotatoes = Number(allPotatoes);
allOfPotatoes.innerText = allPotatoes;
if (allPotatoes >= 10000000) {
  stat.style.height = "90px";
}
});

chrome.storage.local.get(["sfxSettings"], (result) => {
  SFX = result.sfxSettings;
if (SFX == true) {
  sfxImige.src = "sfx.svg";
} else if (SFX == false) {
  sfxImige.src = "nosfx.svg";
} else {
  alert("Something Is Very Wrong...");
}
});

chrome.storage.local.get(["numberOfThings"], (result) => {
numberOfSacrifices = result.numberOfThings || 0;
required = 50 * Math.pow(2, numberOfSacrifices); 
sacrificesDone.innerText = numberOfSacrifices;
sacrifice.title = "This Requires " + required + " Potatoes";
if (currentPotatoes >= required) {
  sacrifice.style.backgroundColor = "green";
  sacrifice.innerText = "Sacrifice Potatoes";
 } else if (currentPotatoes < required) {
  sacrifice.style.backgroundColor = "red";
  sacrifice.innerText = "Sacrifice Potatoes";
 } else {
  alert("It Appears Something Went Wrong While Calculating You Required Potatoes, Try Clicking The Potato A Couple Times Then Reloading. If You Get This Error Again Please Tell Me Via GitHub");
  sacrifice.style.backgroundColor = "yellow";
  sacrifice.innerText = "Error";
 }
});

if (numberOfSacrifices == 0) {
  required = 50;
}


//Dark Mode Starts Here
let filla = document.getElementById("hide");
let fillb = document.getElementById("txt");
let fillc = document.getElementById("number");
let filld = document.getElementById("theNumber");
let fille = document.querySelector("body");
let fillf = document.getElementById("extraThing");
//let fillg = document.getElementById("multiplierx");
let fillh = document.getElementById("requiredx");
//Dark Mode Vars End Here

chrome.storage.local.get(["multiplying"], (result) => {
multiplier = result.multiplying || 1;
multiply.innerText = multiplier;
});

chrome.storage.local.get(["requir"], (result) => {
requiredx2 = result.requir;
requiredx2x2.innerText = requiredx2;
if (currentPotatoes >= requiredx2 && eventActive == false) {
  multiplyMultiplier.style.backgroundColor = "green";
} else {
  multiplyMultiplier.style.backgroundColor = "red";
}
});

let dark = true;

  chrome.storage.local.get(["potatoScore"], (result) => {
    numOfClicks = result.potatoScore || 0;
    total.innerText = numOfClicks;
    if (currentPotatoes >= requiredx2 && eventActive == false) {
  multiplyMultiplier.style.backgroundColor = "green";
} else if (currentPotatoes < requiredx2) {
  multiplyMultiplier.style.backgroundColor = "red";
} else {
  alert("Something Went Wrong With Getting Your Score(s), Please Click The Potato A Couple Times And Reloading. If Reloading Dosent Work And You Get This Again Please Tell Me Via GitHub");
}
  });

  chrome.storage.local.get(["current"], (result) => {
   currentPotatoes = result.current || 0;
   collected.innerText = currentPotatoes;
  });

chrome.storage.local.get(["away", "timeAway"], (result) => {
    let offlineEarned = result.away || 0;
    alert("Total Potatoes Added While Away: " + offlineEarned);
    chrome.storage.local.set({ away: 0, timeAway: 0 });
  });

chrome.storage.local.get(["dark"], (result) => {
    dark = result.dark;
    if (dark) {
    themed.src = "darkTheme.png";
    filla.style.backgroundColor = "rgb(158, 158, 158)";
fillb.style.color = "black";
fillc.style.color = "black";
filld.style.color = "black";
fille.style.backgroundColor = "rgba(206, 206, 206, 1)";
settings.src = "settings.svg";
stat.style.backgroundColor = "rgba(68, 71, 255, 1)"
multiply.style.color = "black";
multiplierDisplay.style.color = "black";
fillf.style.color = "black";
//fillg.style.color = "black";
multiplierx2.style.color = "black";
//requiredx2x2.style.color = "black";
fillh.style.setProperty("color", "black", "important");
} else {
    themed.src = "lightTheme.png";
    filla.style.backgroundColor = "rgb(33, 33, 33)";
    fillb.style.color = "white";
    fillc.style.color = "white";
    filld.style.color = "white";
    fille.style.backgroundColor = "#292928";
    settings.src = "settings.png";
    stat.style.backgroundColor = "rgb(149, 150, 255)";
    multiply.style.color = "white";
multiplierDisplay.style.color = "white";
fillf.style.color = "white";
//fillg.style.color = "white";
multiplierx2.style.color = "white";
//requiredx2x2.style.color = "white";
fillh.style.setProperty("color", "white", "important");
}
});

let value = dark; //IDK What This Is But Just Leave It In Case It Does Something

settings.addEventListener("click", () => {
something.classList.toggle("show");
if (stat.classList.contains("stat")) {
  stat.classList.toggle("stat");
}
});

one.addEventListener("click", () => {
document.getElementById("potato").style.width = "150px";
document.getElementById("potato").style.height = "auto";
sizeOfPage = 1;
chrome.storage.local.set({ sizeThings: sizeOfPage });
});

two.addEventListener("click", () => {
document.getElementById("potato").style.width = "200px";
document.getElementById("potato").style.height = "auto";
sizeOfPage = 2;
chrome.storage.local.set({ sizeThings: sizeOfPage });
});

three.addEventListener("click", () => {
document.getElementById("potato").style.width = "250px";
document.getElementById("potato").style.height = "auto";
sizeOfPage = 3;
chrome.storage.local.set({ sizeThings: sizeOfPage });
});

four.addEventListener("click", () => {
document.getElementById("potato").style.width = "300px";
document.getElementById("potato").style.height = "auto";
sizeOfPage = 4;
chrome.storage.local.set({ sizeThings: sizeOfPage });
pain != pain;
if (pain == true) {
 allOfPotatoes.title = "Super Secret Easter Egg Ooooh";
} else {
  allOfPotatoes.title = "Potatoes Gained In All";
}
});

five.addEventListener("click", () => {
document.getElementById("potato").style.width = "350px";
document.getElementById("potato").style.height = "auto";
sizeOfPage = 5;
chrome.storage.local.set({ sizeThings: sizeOfPage });
});

/* function animation() {
if (sizeOfPage == 1) {
document.getElementById("potato").style.width = "180px";
document.getElementById("potato").style.height = "auto";
setTimeout(function() {
document.getElementById("potato").style.width = "150px";
document.getElementById("potato").style.height = "auto";
}, 50);
} else if (sizeOfPage == 2) {
  document.getElementById("potato").style.width = "230px";
document.getElementById("potato").style.height = "auto";
setTimeout(function() {
document.getElementById("potato").style.width = "200px";
document.getElementById("potato").style.height = "auto";
}, 50);
} else if (sizeOfPage == 3) {
  document.getElementById("potato").style.width = "280px";
document.getElementById("potato").style.height = "auto";
setTimeout(function() {
document.getElementById("potato").style.width = "250px";
document.getElementById("potato").style.height = "auto";
}, 50);
} else if (sizeOfPage == 4) {
  document.getElementById("potato").style.width = "330px";
document.getElementById("potato").style.height = "auto";
setTimeout(function() {
document.getElementById("potato").style.width = "300px";
document.getElementById("potato").style.height = "auto";
}, 50);
} else if (sizeOfPage == 5) {
  document.getElementById("potato").style.width = "380px";
document.getElementById("potato").style.height = "auto";
setTimeout(function() { // :3
document.getElementById("potato").style.width = "350px";
document.getElementById("potato").style.height = "auto";
}, 50);
}
}; */ //this is when i didnt know how to animate or well i was not as good as i am today (its been 15 minutes)

potatoClicked.addEventListener("click", () => {
  currentPotatoes = Number(currentPotatoes);
multiplier = Number(multiplier);
required = 50 * Math.pow(2, numberOfSacrifices);
 numOfClicks++;
 currentPotatoes = currentPotatoes + (1 * multiplier);
 collected.innerText = currentPotatoes;
 chrome.storage.local.set({ current: currentPotatoes});
 chrome.storage.local.set({ potatoScore: numOfClicks });
 total.innerText = numOfClicks;
 allPotatoes = allPotatoes + (1 * multiplier);
 allPotatoes = Number(allPotatoes);
allOfPotatoes.innerText = allPotatoes;
chrome.storage.local.set({ totalOfAll: allPotatoes });
sacrifice.title = "This Requires " + required + " Potatoes";
potatoAnimation();
if (SFX == true) {
let pop = new Audio("pop.mp3");
  pop.play();
}
if (allPotatoes >= 10000000) {
  stat.style.height = "90px";
}
 if (currentPotatoes >= required && eventActive == false) {
  sacrifice.style.backgroundColor = "green";
 } else if (currentPotatoes < required) {
  sacrifice.style.backgroundColor = "red";
 } else {
  alert("It Appears Something Went Wrong While Calculating You Required Potatoes, Try Clicking The Potato A Couple Times Then Reloading. If You Get This Error Again Please Tell Me Via GitHub");
  sacrifice.style.backgroundColor = "yellow";
  sacrifice.innerText = "Error";
 }
 if (currentPotatoes >= requiredx2 && eventActive == false) {
  multiplyMultiplier.style.backgroundColor = "green";
} else if (currentPotatoes < requiredx2) {
  multiplyMultiplier.style.backgroundColor = "red";
} else {
  alert("Im Getting Bored Of Writing Errors But This Is Here If Your Thing Didnt Do Its Thing Properly I Guess");
}
animation();
});

chrome.storage.local.get(["muteSettings"], (result) => {
mutedSettings = result.muteSettings;
if (mutedSettings == false) {
sound.src="sound.png";
  music.play();
  soundBool = true;
} else if (mutedSettings == true) {
sound.src="noSound.png";
  music.pause();
  soundBool = false;
} else {
  alert("There Once Was An Error Code For The Muted Settings Not Working, Please Mute/Un Mute The Sound Then Reload To Fix. If On Reload You Get This Again Please Report Via GitHub");
  sound.src="noSound.png";
  music.pause();
  soundBool = false;
}
});
/* i am so sad while writing this, I have 
a secret only one person knows and im afraid that if 
specific people know they wont like me anymore, 
thank you for reading this it means a lot
*/
sounding.addEventListener("click", () => {
soundBool = !soundBool;
if (soundBool == true) {
  sound.src="sound.png";
  music.play();
  chrome.storage.local.set({ muteSettings: false });
} else if (soundBool == false) {
  sound.src="noSound.png";
  music.pause();
  chrome.storage.local.set({ muteSettings: true });
} else {
  alert("Please Mute/Un Mute Then Reload, If You Get This Or A Similer Error Message Please Report Via GitHub");
  sound.src="noSound.png";
  music.pause();
  chrome.storage.local.set({ muteSettings: true });
}
});

sfxImige.addEventListener("click", () => {
SFX = !SFX;
if (SFX == true) {
  sfxImige.src = "sfx.svg";
  chrome.storage.local.set({ sfxSettings: SFX });
} else if (SFX == false) {
  sfxImige.src = "nosfx.svg";
  chrome.storage.local.set({ sfxSettings: SFX });
} else {
  alert("Another Alert For Bad");
}
});

theme.addEventListener("click", () => {
  dark = !dark;
if (dark == true) {
  themed.src="darkTheme.png"
  chrome.storage.local.set({ dark: true });
  filla.style.backgroundColor = "rgb(158, 158, 158)";
fillb.style.color = "black";
fillc.style.color = "black";
filld.style.color = "black";
fille.style.backgroundColor = "rgba(206, 206, 206, 1)";
settings.src = "settings.svg";
stat.style.backgroundColor = "rgba(68, 71, 255, 1)";
multiply.style.color = "black";
multiplierDisplay.style.color = "black";
fillf.style.color = "black";
//fillg.style.color = "black";
multiplierx2.style.color = "black";
//requiredx2x2.style.color = "black";
fillh.style.setProperty("color", "black", "important");
} else {
  themed.src="lightTheme.png"
  chrome.storage.local.set({ dark: false });
  filla.style.backgroundColor = "rgb(33, 33, 33)";
    fillb.style.color = "white";
    fillc.style.color = "white";
    filld.style.color = "white";
    fille.style.backgroundColor = "#292928";
    settings.src = "settings.png";
    stat.style.backgroundColor = "rgb(149, 150, 255)";
    multiply.style.color = "white";
multiplierDisplay.style.color = "white";
fillf.style.color = "white";
//fillg.style.color = "white";
multiplierx2.style.color = "white";
//why did dark mode not work!!! >:(... (1.5 hours of troubleshooting and talking to GPT later *not a joke)nevermind its just gonna be orange
//requiredx2x2.style.color = "white";
fillh.style.setProperty("color", "white", "important");
}
});

sacrifice.addEventListener("click", () => {
  currentPotatoes = Number(currentPotatoes);
multiplier = Number(multiplier);
required = 50 * Math.pow(2, numberOfSacrifices);
 if (currentPotatoes >= required) {
  currentPotatoes = currentPotatoes - required;
  numberOfSacrifices++;
  required = 50 * Math.pow(2, numberOfSacrifices);
  chrome.storage.local.set({ numberOfThings: numberOfSacrifices});
  collected.innerText = currentPotatoes;
  multiplier++;
  chrome.storage.local.set({ multiplying: multiplier });
  multiply.innerText = multiplier;
  sacrificesDone.innerText = numberOfSacrifices;
 }
 if (currentPotatoes >= required) {
  sacrifice.style.backgroundColor = "green";
  sacrifice.innerText = "Sacrifice Potatoes";
 } else if (currentPotatoes < required) {
  sacrifice.style.backgroundColor = "red";
  sacrifice.innerText = "Sacrifice Potatoes";
 } else {
  alert("It Appears Something Went Wrong While Calculating You Required Potatoes, Try Clicking The Potato A Couple Times Then Reloading. If You Get This Error Again Please Tell Me Via GitHub");
  sacrifice.style.backgroundColor = "yellow";
  sacrifice.innerText = "Error";
 }
 sacrifice.title = "This Requires " + required + " Potatoes";
});

multiplyMultiplier.addEventListener("click", () => {
if (currentPotatoes >= requiredx2 && eventActive == false) {
  currentPotatoes = currentPotatoes - requiredx2;
  collected.innerText = currentPotatoes;
  multiplier = multiplier * 2;
  chrome.storage.local.set({ multiplying: multiplier });
  multiply.innerText = multiplier;
  requiredx2 = requiredx2 * 10;
  chrome.storage.local.set({ requir: requiredx2 })
  requiredx2x2.innerText = requiredx2;
}
if (currentPotatoes >= requiredx2 && eventActive == false) {
  multiplyMultiplier.style.backgroundColor = "green";
} else if (currentPotatoes < requiredx2) {
  multiplyMultiplier.style.backgroundColor = "red";
} else {
  alert("Something Went Wrong With Getting Your Score(s), Please Click The Potato A Couple Times And Reloading. If Reloading Dosent Work And You Get This Again Please Tell Me Via GitHub");
}
});

stats.addEventListener("click" , () => {
    stat.classList.toggle("stat");
});


});