const form = document.querySelector("form");

// here height and weight are written inside the listener as 
// if we take outside it will run and accept empty value first

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value); // .value to take value from id
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if( height=== '' || height < 0 || isNaN(height)){

    // function isNaN(number: number): boolean
    // Returns a Boolean value that indicates whether a value is the reserved value
    //  NaN (not a number)

       result.innerHTML = `please give a valid height ${height} `;
    }

    else if( weight === '' || weight < 0 || isNaN(weight)){
           result.innerHTML = `please give a valid Weight ${weight}` ;
        }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2); // limiting the decimal to 2 digits 
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
    }
});