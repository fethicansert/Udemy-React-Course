const overlay = document.querySelector(".overlay");
const buttons = document.querySelectorAll(".show-popup-btn");
const popup = document.querySelector('.popup');
const container = document.querySelector('.container');
const closePopupBtn = document.getElementById('close-popup-btn');

buttons.forEach(button => button.addEventListener('click', showPopup));
closePopupBtn.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);
document.addEventListener('keydown',(e) => 
    (e.key === "Escape" && !popup.classList.contains('hidden')) && closePopup()
);

function showPopup() {
    overlay.classList.remove('hidden');
    popup.classList.remove('hidden')
    container.classList.add('blur');
}

function closePopup() {
    overlay.classList.add('hidden');
    popup.classList.add('hidden')
    container.classList.remove('blur');
}

