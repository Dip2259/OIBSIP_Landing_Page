let selectBtn = document.getElementsByClassName('select-btn')[0];
let options = document.querySelectorAll(".option");
let navOpenClose = document.querySelector('.select-btn i');

Array.from(options).forEach((elem)=>{
    elem.addEventListener("click",()=>{
        selectBtn.classList.toggle("active");
        navOpenClose.classList.remove("fa-close");
        navOpenClose.classList.add("fa-bars");
    })
})
selectBtn.addEventListener('click',()=>{
    selectBtn.classList.toggle("active");
    if(selectBtn.classList.contains("active")){
        navOpenClose.classList.remove("fa-bars");
        navOpenClose.classList.add("fa-close");
    }
    else{
        navOpenClose.classList.remove("fa-close");
        navOpenClose.classList.add("fa-bars");
    }
})