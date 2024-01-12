let body = document.querySelector("body");
// body.style.backgroundColor = "white";
// console.log(body);

let buttons = document.querySelectorAll(".btn");
// console.log(buttons);
buttons.forEach(function(btn){
    btn.addEventListener("click", function(e){
        // console.log(e);
        // console.log(e.target.id);

        switch (e.target.id) {
            case "gray":
                body.style.backgroundColor = e.target.id;
                break;

            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "black":
                body.style.backgroundColor = e.target.id;
                break;
            case "orange":
                body.style.backgroundColor = e.target.id;
                break;
        
            default:
                break;
        }
    })
})