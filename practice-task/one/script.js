const button = document.querySelectorAll(".btn")
const body = document.body

button.forEach(function(button){
    // console.log(button);
    button.addEventListener("click", function(event){
        // console.log(event);
        // console.log(event.target);
        
        if(event.target.id === "gray"){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === "white"){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === "orange"){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === "blue"){
            body.style.backgroundColor = event.target.id
        }
    })
})