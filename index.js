
// const h1Function = function(){
//     let h1Change = document.getElementById('h1')
//     h1Change[0].innerText = "NoviTel"
// }
const h1Function = function(){
    let oldHeading = document.getElementById('header')  
    oldHeading.innerText = 'Novi Tel'
}
 h1Function()

const backgroundColor = function(){
    document.body.style.background = 'red'
}
backgroundColor()
const changeFooter = function(){
   
    let myFooter = document.getElementsByClassName("pageFooter")

    myFooter[0].innerHTML = 'this page was loaded on:' + new Date()
}
changeFooter()

const addClass = function(){
    let newClass = document.querySelectorAll('.link')  
        for(let i=0; i<newCssClass.length; i++){
            newClass[i].classList.add("amazon")        
        }  
}

addClass()

const toggle = function(){
    let imageToggle = document.getElementsByClassName("image-phone")
    for(let i=0; i<imageToggle.length; i++){

        imageToggle[i].style.display = "none"

    }
}
toggle()
// let changeColor = document.getElementById('change') 

const changeColor = function () {
    document.body.style.color = "red";
    return false;
}










