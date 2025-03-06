//sidebar

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
    popup.style.opacity ='1';
    popup.style.top = '50%';
    
    
}
function hidePopup(){
    const popup = document.querySelector('.popup')
    popup.style.opacity = '0';
    popup.style.top = '-150%';
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

//view more button
function showMore(){
    const viewMore = document.querySelector('.view-more-container')
    viewMore.style.display = 'flex'

    const viewMoreBtn = document.querySelector('.view-more-btn')
    viewMoreBtn.style.display = 'none'
    const viewLessBtn = document.querySelector('.view-less-btn')
    viewLessBtn.style.display = 'flex'
}
function showLess(){
    const viewLess = document.querySelector('.view-more-container')
    viewLess.style.display = 'none'
    
    const viewLessBtn = document.querySelector('.view-less-btn')
    viewLessBtn.style.display = 'none'
    const viewMoreBtn = document.querySelector('.view-more-btn')
    viewMoreBtn.style.display = 'flex'
}
