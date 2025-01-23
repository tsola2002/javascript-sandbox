//SELECT EVERYTHING THAT WE'LL NEED TO THE PROJECT

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

console.log(btnOpenModal);

for(let i = 0; i < btnOpenModal.length; i++){
   btnOpenModal[i].addEventListener('click', function () {
       console.log("Button Clicked");
       modal.classList.remove('hidden');
       overlay.classList.remove('hidden');
   });
    
    btnCloseModal.addEventListener('click', function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    });
}