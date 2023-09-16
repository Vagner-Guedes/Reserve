const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const submitBtn = document.getElementById('submitBtn');


openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});


closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


submitBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});