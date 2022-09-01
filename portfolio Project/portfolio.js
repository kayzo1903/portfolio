//humberger menu 
const humberger = document.querySelector(".humberger")
const aside =document.querySelector(".aside")

humberger.addEventListener("click",()=>{
    //console.log("hey")
    aside.classList.toggle("active")
    humberger.classList.toggle("active")
})