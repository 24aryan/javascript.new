const buttons = document.querySelectorAll('.buttons')
const body = document.querySelector('body')

buttons.forEach(function (buttons){
    console.log(buttons);
    buttons.addEventListener('click' , function (event) {
        console.log(event);
        console.log(event.target);
        
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'green'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'red'){
            body.style.backgroundColor = event.target.id;
        }
         
    })
})