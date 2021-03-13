const menuBurger = document.querySelector('.menu__burger');
const navMain = document.querySelector('.blog__navigation');



menuBurger.addEventListener('click', (Event) => {
    navMain.classList.toggle('visible');
});

let inputTitle = document.querySelector('.post__header-input')
let inputDescription = document.querySelector('.post__description-input')
let blogContent = document.querySelector('.result__block')
const createButton = document.querySelector('.post__create-button')


createButton.addEventListener('click', (Event) =>{
    Event.preventDefault();

    blogContent.innerHTML += `
    <div class="post">
        <h3>${inputTitle.value}</h3>
        <p>${inputDescription.value}</p>
        
    </div>`;
})