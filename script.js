let box1 = document.querySelector(".box-1")
let box2 = document.querySelector(".box-2")
let box3 = document.querySelector(".box-3")
let box4 = document.querySelector(".box-4")

let signIn = document.querySelector(".sign-in");
let signUp = document.querySelector(".sign-up");

signUp.addEventListener('click', ()=>{
    box1.classList.add("class", "roll-in-left")
    box2.classList.add("class", "roll-in-right")
    box1.classList.remove("none");
    box2.classList.remove("none");
    box3.classList.add("class","none");
    box4.classList.add("class","none");
})

signIn.addEventListener('click', ()=>{
    box3.classList.add("class", "roll-in-left")
    box4.classList.add("class", "roll-in-right")
    box1.classList.add("class","none");
    box2.classList.add("class","none");
    box3.classList.remove("none");
    box4.classList.remove("none");
})