// =====================================
// ПЕРЕХОД К ПОЗДРАВЛЕНИЮ
// =====================================

function openGreeting() {

    const nameInput = document.getElementById("userName");
    const name = nameInput.value.trim();

    // Проверяем, введено ли имя
    if (name === "") {
        alert("Сначала введите своё имя! 🎄");
        nameInput.focus();
        return;
    }

    // Добавляем имя в заголовок
    document.getElementById("greetingTitle").textContent =
        "С Новым годом, " + name + "!";

    // Скрываем первую страницу
    document.getElementById("startPage").style.display = "none";

    // Показываем страницу поздравления
    document.getElementById("greetingPage").classList.add("active");

    // Перемещаем страницу наверх
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Запускаем праздничные искорки
    createFireworks();
}

// =====================================
// СПИСОК ПОЖЕЛАНИЙ
// =====================================

const wishes = [

    "Пусть удача сопровождает Вас на каждом шагу, а мечты постепенно становятся реальностью! 🍀",

    "Желаем побольше радостных моментов, искренних улыбок и приятных неожиданностей! ✨",

    "Пусть Огненная Коза принесёт в Вашу жизнь тепло, вдохновение и множество возможностей! 🔥",

    "Желаем крепкой дружбы, душевного спокойствия и исполнения самых заветных желаний! ❤️",

    "Пусть новый год будет ярким, интересным и наполненным незабываемыми приключениями! 🎄"

];

// =====================================
// СМЕНА ПОЖЕЛАНИЯ
// =====================================

function changeWish() {

    const randomIndex = Math.floor(Math.random() * wishes.length);

    document.getElementById("wishText").textContent =
        wishes[randomIndex];

}

// =====================================
// ОТКРЫТИЕ ПОДАРКА
// =====================================

function openGift() {

    const message = document.getElementById("giftMessage");

    // Показываем или скрываем сообщение
    message.classList.toggle("show");

    // При открытии запускаем искорки
    if (message.classList.contains("show")) {
        createFireworks();
    }

}

// =====================================
// СОЗДАНИЕ ПАДАЮЩИХ СНЕЖИНОК
// =====================================

function createSnow() {

    const snow = document.getElementById("snow");

    const symbols = ["❄", "❅", "✧", "❆"];

    for (let i = 0; i < 35; i++) {

        const flake = document.createElement("div");

        flake.className = "snowflake";

        // Выбираем случайный символ
        flake.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        // Случайное расположение
        flake.style.left = Math.random() * 100 + "vw";

        // Случайный размер
        flake.style.fontSize =
            (Math.random() * 15 + 10) + "px";

        // Скорость падения
        flake.style.animationDuration =
            (Math.random() * 8 + 6) + "s";

        // Задержка анимации
        flake.style.animationDelay =
            (Math.random() * 10) + "s";

        snow.appendChild(flake);

    }

}

// =====================================
// ПРАЗДНИЧНЫЕ ИСКОРКИ
// =====================================

function createFireworks() {

    const colors = ["#ffce70", "#ff8248", "#fff0bd"];

    for (let i = 0; i < 24; i++) {

        const spark = document.createElement("div");

        spark.textContent = "✦";

        spark.style.position = "fixed";
        spark.style.left = Math.random() * 100 + "vw";
        spark.style.top = Math.random() * 80 + "vh";

        // Выбираем случайный цвет
        spark.style.color =
            colors[Math.floor(Math.random() * colors.length)];

        spark.style.fontSize = "20px";
        spark.style.pointerEvents = "none";
        spark.style.zIndex = "100";

        // Запускаем анимацию из CSS
        spark.style.animation = "sparkle 1.2s ease-out forwards";

        document.body.appendChild(spark);

        // Удаляем искорку после анимации
        setTimeout(() => {
            spark.remove();
        }, 1300);

    }

}

// =====================================
// ЗАПУСКАЕМ СНЕГОПАД
// =====================================

createSnow();