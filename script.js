const buttons = document.querySelectorAll('.button')

const body = document.querySelector("body")
const colour = ['red', 'green', 'golden', 'silver', 'pink', 'orange', 'purple', 'brown', 'teal', 'lavender']


buttons.forEach(function(button) {
    // console.log(button)
    button.addEventListener('click', function(e){
        // console.log(e)
        // console.log(e.target)

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'random'){
            const num = Math.round(Math.random()*10);
            // console.log(num)
            body.style.backgroundColor = colour[num];
        }
    })
});

