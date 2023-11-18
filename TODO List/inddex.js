// const item = document.querySelector("#item")
// const toDoBox = document.querySelector("#to-do-box")

// item.addEventListener("keyup",function(event){
//     if(event.key == "Enter"){
//         addTodo(this.value);
//         this.value = ""
//     }
// })

// const addTodo = item =>{
//     const listItem = document.createElement("li");
//     listItem.innerHTML = ` 
//     ${item} 
//     <i class='bx bxs-message-alt-x'></i>`

//     listItem.addEventListener("click",function(){
//         this.classList.toggle("done")
//     })
//     listItem. querySelector("i").addEventListener("click",function(){
//         listItem.remove()
//     })

//     toDoBox.appendChild(listItem)

    
// }


// const item = document.querySelector("#item")
// const toDoBox = document.querySelector("#to-do-box")

// item.addEventListener("keyup",function(event){
//     if(event.key == "Enter"){
//        addTodo(this.value)
//         this.value = ""
//     };
// })
// const addTodo = (item) =>{
//     const listItem = document.createElement("li")
//     listItem.innerHTML = `${item}
//     <i class='bx bxs-message-alt-x'></i>
//      `;
//      listItem.addEventListener("click",function(){
//         this.classList.toggle("done")
//      }
//      )
//      listItem.querySelector("i").addEventListener("click",function(){
//         listItem.remove(
//         )
//      })
//      toDoBox.appendChild(listItem)
// }


// const item = document.querySelector("#item")
// const toDoBox = document.querySelector("#to-do-box")

// item.addEventListener("keyup",function(event){
//     if(event.key == "Enter"){
//         addTodo(this.value);
//         this.value =""
//     }
// })
// const addTodo = (item) => {
//     const listItem = document.createElement("li")
//     listItem.innerHTML = 
//     `
//     ${item}
//      <i class='bx bxs-message-alt-x'></i>
//     `

//     listItem.addEventListener("click",function(){
//         this.classList.toggle("done")
//     })
//     listItem.querySelector("i").addEventListener("click",function(){
//         listItem.remove()
//     })
//     toDoBox.appendChild(listItem)
// }


// const item = document.querySelector("#item")
// const toDoBox = document.querySelector("#to-do-box")

// item.addEventListener("keyup",function(event){
//     if(event.key == "Enter"){
//         addTodo(this.value);
//         this.value = ""
//     }
// })
// const addTodo = (item) => {
//     const listItem = document.createElement("li")
//     listItem.innerHTML = `${item}
//     <i class='bx bxs-message-alt-x'></i>
    
//     `
//     listItem.addEventListener("click",function(){
//         this.classList.toggle("done")
//     })
//     listItem.querySelector("i").addEventListener("click",function(){
//         listItem.remove()
//     })
//     toDoBox.appendChild(listItem)
// }

const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
       addTodo(this.value);
        this.value = ""
    }
})
const addTodo = (item) => {
    const listItem = document.createElement("li")
    listItem.innerHTML = `${item}
    <i class='bx bxs-message-alt-x'></i>
    `
    listItem.addEventListener("click",function(){
        this.classList.toggle("done")
    })
    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove()
    })
    toDoBox.appendChild(listItem)
}