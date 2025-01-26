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


// -----------------------------------------------------

const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('sendMessage');

sendButton.addEventListener('click', function () {
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    if (!name || !email || !message) {
        alert('Please fill out all fields!');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});

