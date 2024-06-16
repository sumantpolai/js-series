# project related dom


# project link[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-jjclzu?file=index.html
)

## project 1

```javascript
console.log('sumanta')
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e.target)
    if(e.target.id==='grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id==='white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor = e.target.id;
    }
  })
})

```

## project 2
```javascript

const form = document.querySelector('form');

// this use case will give you empty, bcz it placed in out side of the code and after refress here in height store an empty value 
// const  height = parseInt(document.querySelector("#height").value)

form.addEventListener('submit', function(e){
  e.preventDefault()

  const  height = parseInt(document.querySelector("#height").value)
  const  weight = parseInt(document.querySelector("#weight  ").value)
  const  results = document.querySelector("#results")

  if( height==="" || height<0 || isNaN(height)){
    results.innerHTML =`please give a valid height ${height}`;
  }else if( weight==="" || weight<0 || isNaN(weight)){
    results.innerHTML =`please give a valid weight ${weight}`;
  }else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category = "";

    if (bmi < 18.6) {
      category = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "Normal Weight";
    } else {
      category = "Overweight";
    }

    results.innerHTML = `<span>BMI: ${bmi}</span><br><span>${category}</span>`;
  }
});

```
## project 3
``` javascript
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000)

```

## project 4
```javascript

let randomNumber = parseInt(Math.random()*100+1);

const submit =document.querySelector('#subt')
const userInput =document.querySelector('#guessField')
const guessSlot =document.querySelector('.guesses')
const remaining =document.querySelector('.lastResult')
const lowOrHi =document.querySelector('.lowOrHi')
const startOver =document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess =[]
let numGuess = 1
let playGame = true;
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  // this method check the given guesss is valid or not
 if(isNaN(guess)){
   alert(`please enter a valid number`)
 }else if(guess<1){
  alert(`please enter a  number more then 1`)
}else if (guess>100){
  alert(`please enter a number under 100`)
}else {
  prevGuess.push(guess)
  if (numGuess===11){
    displayGuess(guess)
    displayMessage(`game over. random no was ${randomNumber}`)
    endGame()
  }else{
    displayGuess(guess)
    checkGuess(guess)
  }
}
}

function checkGuess(guess){
  // it check the enterd no is equal to the random no. or not
 if(guess===randomNumber){
   displayMessage(`you guess that right`)
 }else if(guess < randomNumber){
   displayMessage(`number is too low`)
 }else if (guess > randomNumber){
   displayMessage(`number is too high`)
 }
}

function displayGuess(guess){
  // it clean the value and updat the remaining and guess
  userInput.value = ''
  guessSlot.innerHTML += `${guess} `
  numGuess++;
  remaining.innerHTML = `${11- numGuess}`
}
function displayMessage(message){
  // it pass a msg in lowOrHi
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
 userInput.value='';
 userInput.setAttribute('disabled', '');
 p.classList.add('button')
 p.innerHTML = '<h2> id ="new game"> start new game</h2>';
 startOver.appendChild(p)
 playGame = false
 newGame()
}
function newGame (){
  const newGameButten = document.querySelector('#newGame');
  newGameButten.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100+1);
    prevGuess='';
    newGame= 1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11-newGame} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p)
  })

}

```
## project 5

```
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```

## project 6

```
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});

```