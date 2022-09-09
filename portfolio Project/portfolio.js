//humberger menu 
const humberger = document.querySelector(".humberger")
const aside =document.querySelector(".aside")
const links = document.querySelectorAll(".links")

humberger.addEventListener("click",()=>{
    //console.log("hey")
    aside.classList.toggle("active")
    humberger.classList.toggle("active")
})
links.forEach((link)=>{
    link.addEventListener("click", ()=>{
        aside.classList.toggle("active")
        humberger.classList.toggle("active") ;
    })
})

window.addEventListener("scroll", ()=>{
    aside.classList.remove("active")
    humberger.classList.remove("active")
})

//date function 
  const yearUpdate = document.getElementById("date")


  //DOMCONTENTLOADED 
  window.addEventListener ("DOMContentLoaded", ()=>{
      let d = new Date()
      yearUpdate.innerHTML = d.getFullYear()
        
  })