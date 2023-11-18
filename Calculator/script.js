let inputBox = document.getElementById("inputBox")
let buttons = document.querySelectorAll("button")
let string = ""

buttons.forEach(elem =>{
    elem.addEventListener("click",(v)=>{
        if(v.target.innerText == "="){
            string = String(eval(string))
            inputBox.value = string
        }
        else if(v.target.innerText == "AC"){
            string = ""
            inputBox.value = string
        }
        else if(v.target.innerText == "DE"){
            string = string.slice(0 , -1)
            inputBox.value = string
        }
        else{
            string += v.target.innerText;
            inputBox.value = string
        }
    })
})