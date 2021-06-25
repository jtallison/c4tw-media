let smiles = document.querySelectorAll(".smile");
for (let smile of smiles) {
  smile.style.transform = `rotate(${20}deg)`
}

function getElement(elementName) {
  let elem = document.querySelector(elementName);
  return elem
}

let smileyRed = getElement('.smiley-red')

const button = document.createElement('button');
button.innerText = 'Login'
button.style.position = 'absolute';
button.style.left = '50%';
button.style.zIndex = 5;
document.querySelector('body').appendChild(button)

class Smiley {
  constructor (faceDiv='.smiley-yellow', faceColor="#ee9295") {
    this.color = faceColor;
    this.size = 12;
    this.eyeSize = 12;
    this.rotation = 0;
    this.speed = 5; // % of the screen
    this.position = {
      x: 10,
      y: 10
    }
    this.walkTimer;
    
    this.face = document.querySelector(faceDiv);
    if(this.face != undefined) {
      this.leftEye = document.querySelector(faceDiv + ' .left-eye');
      this.rightEye = document.querySelector(faceDiv + ' .right-eye');
    } else {
      this.face = document.createElement('div');  // create face div
      this.face.id = faceDiv;
      this.face.classList.add('smiley-green');
      this.face.classList.add('floatleft');
      this.leftEye = document.createElement('div'); // create left-eye div and add to face
      this.leftEye.classList.add('left-eye');
      this.face.appendChild(this.leftEye);
      this.rightEye = document.createElement('div'); // create right-eye div and add to face
      this.rightEye.classList.add('right-eye');
      this.face.appendChild(this.rightEye);
      this.smile = document.createElement('div'); // create smile div and add to face
      this.smile.classList.add('smile');
      this.face.appendChild(this.smile);
      document.querySelector('body').appendChild(this.face);  // add to page
    }
    
    this.setFaceColor(this.color);
    this.setEyeSize(this.eyeSize);
    // this.face.addEventListener('click', () => this.lookAround());
    this.face.onclick = () => this.lookAround();
    // this.face.onclick = function () {this.lookAround()} 
    // this.face.onclick = this.lookAround;
  }
  
  setRotation (degrees) {
    this.rotation = degrees;
    this.face.style.transform = `rotate(${degrees}deg)`; 
  }
  
  setFaceColor (color) {
    this.face.style.background = color;
    this.color = color;
  }
  
  setSize (size) {
    this.size = size;
    this.face.style.width = `${size}px`;
    this.face.style.height = `${size}px`;
  }
  setEyeSize (size) {
    this.eyeSize = size;
    this.rightEye.style.width = `${size}px`;
    this.rightEye.style.height = `${size}px`;
    this.leftEye.style.width = `${size}px`;
    this.leftEye.style.height = `${size}px`;
  }
  
  lookAround() {
    function randomEyePos() {
      return (Math.floor(Math.random() * 3) - 1) * 20;
    }
    let leftEye = randomEyePos()
    let rightEye = randomEyePos()
    this.leftEye.style.transform = `translateX(${leftEye}%)`
    this.rightEye.style.transform = `translateX(${rightEye}%)`
  }
  
  move (xPercent,yPercent) {
    this.position.x = xPercent;
    this.position.y = yPercent;
    this.face.style.position = 'absolute';
    this.face.style.top = `${this.position.y}%`; // 50% 150px 
    this.face.style.left = `${this.position.x}%`;
  }
  
  walk() {
    this.position.x = this.position.x + this.speed;
    if (this.position.x > 100) {
      this.speed = this.speed * -1;
    } else if (this.position.x < 0) {
      this.speed = this.speed * -1;
    }
    this.move(this.position.x, this.position.y);
  }
  
  startWalking(active) {
    if (active) {
      this.walkTimer = setInterval( ()=> this.walk(), 100);
    } else {
      clearInterval(this.walkTimer);
    }
  }
}

let orangeFace = new Smiley('#orangeSmiley', 'orange');
orangeFace.setSize(200)

let numberOfFaces = 20;
let faces = [];

while(faces.length < numberOfFaces){
  let tempFace = new Smiley('#face'+faces.length);
  tempFace.move(Math.floor(Math.random()*100), Math.floor(Math.random()*100));
  tempFace.setFaceColor(getRandomColor());
  tempFace.speed = Math.floor(Math.random()*10);
  tempFace.startWalking(true);
  
  faces.push(tempFace);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let redFace = new Smiley('.smiley-red');
redFace.setRotation(45);
redFace.setFaceColor('lightRed');
redFace.setSize(80)
redFace.setEyeSize(10)
redFace.move(50, 10);

let secondYellowFace = new Smiley('#yellowSmiley', "orange");
secondYellowFace.move(10, 80);

// let blueFace = new Smiley('#blueSmiley', 'blue');

// ***************************
// Yellow Face made into an object using an Object Literal

let yellowFace = {
  face: document.querySelector('.smiley-yellow'),
  leftEye: document.querySelector('.smiley-yellow .left-eye'),
  rightEye: document.querySelector('.smiley-yellow .right-eye'),
  color: "#eed16a",
  size: 12,
  eyeSize: 12,
  rotation: 0,
  setRotation: function (degrees) {
    this.rotation = degrees;
    this.face.style.transform = `rotate(${degrees}deg)`; 
  },
  setFaceColor: function (color) {
    this.face.style.background = color;
    this.color = color;
  }, 
  setSize: function (size) {
    this.size = size;
    this.face.style.width = `${size}px`;
    this.face.style.height = `${size}px`;
  },
  setEyeSize: function(size) {
    this.eyeSize = size;
    this.rightEye.style.width = `${size}px`;
    this.rightEye.style.height = `${size}px`;
    this.leftEye.style.width = `${size}px`;
    this.leftEye.style.height = `${size}px`;
  }
}

yellowFace.setEyeSize(18)
yellowFace.setSize(100);
yellowFace.setRotation(-45)

// ***************************



function move(xPercent,yPercent, face=smileyGreen) {
  face.style.position = 'absolute';
  face.style.top = `${yPercent}%`; // 50% 150px 
  face.style.left = `${xPercent}%`;
}
// move(70, 20, smileyRed)

// function move(p1x, p1y, movex, movey) {
//   let point = {}
//   point.x = p1x + movex;
//   point.y = p1y + movey;
//   return point;
// }

// let newPosition = move(0,0, 10, 5);
// newPosition.x;


// ***************************
// Green face manipulated not as an object
let smileyGreen = document.querySelector('.smiley-green');
move(50,50); // affects green by default

// smileyGreen.style.background = 'lightgreen';
function changeFaceColor(color) {
  smileyGreen.style.background = color;
}
changeFaceColor('greenyellow');

function rotateFace(degrees) {
  smileyGreen.style.transform = `rotate(${degrees}deg)`; 
}
rotateFace(-20)


// Make Eyes Bigger/smaller (Treya)
let smileyGreenRightEye = document.querySelector('.smiley-green .right-eye');
let smileyGreenLeftEye = document.querySelector('.smiley-green .left-eye');
function setEyeSize(size) {
  smileyGreenRightEye.style.width = `${size}px`;
  smileyGreenRightEye.style.height = `${size}px`;
  smileyGreenLeftEye.style.width = `${size}px`;
  smileyGreenLeftEye.style.height = `${size}px`;
}
setEyeSize(15);
// height & width

// Change size of entire smiley face (Adrienne)
function bigness(size) {
  smileyGreen.style.width = `${size}px`;
  smileyGreen.style.height = `${size}px`;
}
bigness(100);

function changeFaceSize(width, height) {
  smileyGreen.style.height = height;
  smileyGreen.style.width = width;
}
// changeFaceSize("50%","50%")

// Move smiley face to new position (Matt)
// position: absolute; top: 10%; left: 10%;
// function move(xPercent,yPercent) {
//   smileyGreen.style.position = 'absolute';
//   smileyGreen.style.top = `${yPercent}%`; // 50% 150px 
//   smileyGreen.style.left = `${xPercent}%`;
// }
// move(50,50);

// Move Eyes to look straight/left/right/crosseyed (Bill)
function look(lookType) {
  if (lookType == 'left') {
    smileyGreenRightEye.style.right = "30%";
    smileyGreenLeftEye.style.left = "15%";
  } else if (lookType == 'right') {
    smileyGreenRightEye.style.right = "15%";
    smileyGreenLeftEye.style.left = "30%";
  } else if (lookType == 'crossed') {
    smileyGreenRightEye.style.right = "30%";
    smileyGreenLeftEye.style.left = "30%";
  } else if (lookType == 'ahead') {
    smileyGreenRightEye.style.right = "22%";
    smileyGreenLeftEye.style.left = "22%";
  }
}
look('left');

function lookAround() {
  function randomEyePos() {
    return (Math.floor(Math.random() * 3) - 1) * 20
    }
  leftEye = randomEyePos()
  rightEye = randomEyePos()
  document.querySelector('.smiley-green .left-eye').style.transform = `translateX(${leftEye}%)`
  document.querySelector('.smiley-green .right-eye').style.transform = `translateX(${rightEye}%)`
}

// pick random color from array of greens (Heidi)

let greens = ["greenYellow", "darkGreen", "paleGreen", "springGreen"]
let colorChoice = Math.floor(Math.random() * 3);

function changeFaceColor(color) {
  smileyGreen.style.background = color;
}
changeFaceColor(greens[colorChoice]);

// Enable random color changes
// enable auto moving across screen

// smileyGreen.style.transform = 'rotate(-20deg)';
// ***************************


let studentJS = {
  firstName: "Millie",
  lastName: "Brown",
  grade: 10,
  friends: ['sarah','syrah','siri']
};

studentJS.firstName

// let studentJS = `{
//   "firstName": "Millie",
//   "lastName": "Brown",
//   "grade": 10,
//   "friends": ['sarah','syrah','siri']
// }`