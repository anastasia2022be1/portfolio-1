// Выбор элементов
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.menu__link');

// Обработка клика на кнопку меню
menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
    menuBtn.classList.toggle('active'); // Кнопка исчезает при открытии меню
});

// Добавление плавной прокрутки и закрытие меню при клике на ссылку
menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth',
            });
        }

        // Закрытие меню и возвращение кнопки
        menuList.classList.remove('active');
        menuBtn.classList.remove('active');
    });
});




// const contactForm = document.querySelector('.contact__form');
// const emailInput = document.querySelector('input[name="email"]');
// const nameInput = document.querySelector('input[name="name"]');
// const messageInput = document.querySelector('input[name="message"]');

// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault(); // Останавливает стандартную отправку формы

//     if (!emailInput.value.includes('@')) {
//         alert('Введите корректный email');
//     } else if (nameInput.value.trim() === '') {
//         alert('Имя не должно быть пустым');
//     } else if (messageInput.value.trim() === '') {
//         alert('Введите сообщение');
//     } else {
//         alert('Форма успешно отправлена!');
//         contactForm.reset(); // Очистка формы
//     }
// });
