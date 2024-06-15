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