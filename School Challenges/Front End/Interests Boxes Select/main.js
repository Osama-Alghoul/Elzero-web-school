let card = document.querySelectorAll('.card');
card.forEach(function (card) {
    card.addEventListener('click', function () {
        card.classList.toggle('active');
        let checkBox = card.querySelector('input[type="checkbox"]');
        checkBox.checked = !checkBox.checked;

    });
});
