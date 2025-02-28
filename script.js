

function showSidebar(){
    const sidebar = document.querySelector('.navigation-sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.navigation-sidebar')
    sidebar.style.display = 'none'
}

//popup
function showPopup(){
    const popup = document.querySelector('.popup')
    popup.style.opacity ='1'
    
}
function hidePopup(){
    const popup = document.querySelector('.popup')
    popup.style.opacity = '0'
};
//Get in touch button
let btnClear = document.querySelector('.submit');
let inputs = document.querySelectorAll('input');

btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value ='');
    alert("your query has been submitted. we'll be in touch shortly");
});

//popup button
let pbtnClear = document.querySelector('.popup-reg-btn');
let pinputs = document.querySelectorAll('input');

pbtnClear.addEventListener('click', () => {
    pinputs.forEach(input => input.value ='');
    alert("Welcome to the coding club!!! We'll be in touch shortly");
});
/*document.querySelector(".register-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn-popup").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});*/