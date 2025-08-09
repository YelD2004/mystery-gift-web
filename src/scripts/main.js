document.addEventListener('DOMContentLoaded', function() {
    const giftImage = document.getElementById('mysteryGiftImage');
    const modal = document.getElementById('questionModal');
    const noMessageModal = document.getElementById('noMessageModal');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const volverBtn = document.getElementById('volverBtn');
    const message = document.getElementById('message');

    giftImage.addEventListener('click', function() {
        modal.classList.remove('hidden');
    });

    yesBtn.addEventListener('click', function() {
        window.location.href = "src/carta.html";
    });

    noBtn.addEventListener('click', function() {
        modal.classList.add('hidden');
        noMessageModal.classList.remove('hidden');
    });

    volverBtn.addEventListener('click', function() {
        noMessageModal.classList.add('hidden');
    });
});