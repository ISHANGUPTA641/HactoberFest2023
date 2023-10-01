let answer = document.getElementById("answer")
const btns = document.querySelectorAll(".buttons")
let result = 0;

btns.forEach(button => {
    if(button.classList.contains('number')){
        button.addEventListener('click', ()=>{
            console.log("the num was clicked!")
            const buttonText = button.textContent;
            answer.textContent += `${buttonText}`;
        })
    }
    else if(button.classList.contains('opt')){
        button.addEventListener('click', ()=>{
            console.log("the opt was clicked!")
            const buttonText = button.textContent;
            answer.textContent += `${buttonText}`;
        })
    }
    else if(button.classList.contains('AC')){
        button.addEventListener('click', ()=>{
            console.log("the AC was clicked!")
            answer.textContent = ''
        })
    }
    else if(button.classList.contains('back')){
        button.addEventListener('click', ()=>{
            console.log("the back was clicked!")
            answer.textContent = answer.textContent.slice(0,-1)
        })
    }
    else{
        button.addEventListener('click', () =>{
            const expression = answer.textContent.replace(/÷/g, "/").replace(/×/g,"*").replace(/%/g,"*0.01").replace("+/-","*(-1)")              
            result = eval(expression);
            answer.textContent = result.toFixed(8);
        })
    }
})

