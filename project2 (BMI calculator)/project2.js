const form = document.querySelector('form');

//this usecase will give you empty value because if reload the page it wll give the empty value inside the height  that's why we used this value inside the event

//  const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }

  // results.innerHTML = `${height}`

  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    const bmi = (weight/((height * height)/10000)).toFixed(2);
    //Show the result

    let p =bmi;
    if(p < 18.6){
      p = "Under Weigth";
    }
    else if(p >= 18.6 && p <= 24.9){
      p = "Normal Weight";
    }

    else{
      p = "Over Weight";
    }
    results.innerHTML = `<span>${bmi} <br> ${p}</span>`;
  }
})