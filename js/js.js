//weighting dictionary for students in Set 1B

let studentSetDictionary = {'anthony': 25,'ryan': 15,'jaguar': 20,'elias': 11,'roy': 7,'bryan':10,'maral':25,'adrian':12, 'jarred': 11, 'ian':20, 'miguel': 10, 'daniel': 20, 'ivy': 13, 'felix':-10, 'anmol':10, 'ishawn':-10, 'nathan':7, 'mike': 8, 'andrew': 18, 'daphney': 25, 'harish': 6, 'nick': 20, 'kevin': -10, 'karanveer': 14};

let vocalStudents = ['felix', 'kevin', 'ishawn'];
let displayZone = document.getElementById("displayZone");
let specialButton = document.getElementById("specialButton");

//removes the vocal students from the picking list
function removeVocalStudents(){
	for (student in vocalStudents){
		delete studentSetDictionary[vocalStudents[student]];
	}
}

//randomizing, main controlling function
function weightSearch(){	
	let rollNum = Math.floor(Math.random() * Math.floor(50));
	let aboveRoll = [];
	
	for (let key in studentSetDictionary){
			let weight = studentSetDictionary[key];
			if (weight >= 100){
				aboveRoll.push(key);
				grabStudent(aboveRoll, aboveRoll.length);
				return
			}
			else if (weight > rollNum){
				aboveRoll.push(key);
			}

	}
	
	if (Object.keys(studentSetDictionary).length < 1){
		
		location.reload(true);
	}
	else if (aboveRoll.length < 1){
		weightSearch();
	}
	
	else{
		console.log(aboveRoll)
		grabStudent(aboveRoll, aboveRoll.length)
	}	
}

//picks students from list aboveRoll at random
function grabStudent(studentList, max){
	randomValidStudent = Math.floor(Math.random() * Math.floor(max));
	pickedStudent = studentList[randomValidStudent];
	manageWeights(pickedStudent);
}


//ejects picked students from pool, increases everyone's weight
function manageWeights(pickedStudent)
{
	for (let key in studentSetDictionary)
	{
		
		if (key == pickedStudent)
		{
			console.log(key);
			delete studentSetDictionary[pickedStudent];
			console.log(key);
			
		}
		else
		{
			studentSetDictionary[key] = Math.floor(studentSetDictionary[key]) +2;
		}
	}
	
	displayZone.innerHTML = pickedStudent;
}

function pickStudentButton(){
	weightSearch();
}

//fluff taken from https://codepen.io/nashvail/pen/wpGgXO for demo version
//No UI is yet designed

// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B9B9B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 8000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
