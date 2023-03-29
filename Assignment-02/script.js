


const BMICalculate = () => {

  const calculateBtn = document.querySelector("#calculateBtn");

  calculateBtn.addEventListener('click', function(e){
    e.preventDefault();
      const container = document.querySelector(".container");
      const weightInput = document.querySelector("#weightInput");
      const heightInput = document.querySelector("#heightInput");

      if(weightInput.value === ''){
        alert('Please Enter Your Weight');
      }
      else if(heightInput.value === ''){
        alert('Please Enter Your Height');
      }
       else{
        const weightInputValue = weightInput.value;
        const heightInputValue = heightInput.value;

        const pElement = document.createElement("p");
        
        container.appendChild(pElement);

        var calculation = `${
         weightInputValue / (heightInputValue * heightInputValue)
     }`;
        var calculation = parseFloat(calculation).toFixed(2);

        pElement.innerHTML = `BMI result is = ${calculation}`;

        heightInput.value = "";
        weightInput.value = "";
       }
      });
}

BMICalculate();

