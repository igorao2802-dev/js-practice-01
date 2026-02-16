
const themeButton = document.getElementById('theme-toggle');

// Восстановление темы при перезагрузке страницы
const savedTheme = localStorage.getItem('theme'); 
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeButton) themeButton.textContent = 'Включить светлую тему';
} else {
    document.body.classList.remove('dark-theme');
    if (themeButton) themeButton.textContent = 'Включить тёмную тему';
}


// ЗАДАНИЕ 1: Переключение темы

// 1. Найдите кнопку по id и сохраните в переменную const
console.log (themeButton);
// 2. Добавьте слушатель события 'click'
themeButton.addEventListener('click', function() {
    // 3. Переключите класс 'dark-theme' у body
    document.body.classList.toggle('dark-theme');

    // ЗАДАНИЕ 3: Работа с переменными (студент дописывает)
    // Подсказка: объявите переменную isDarkMode и проверьте,
    // есть ли у body класс 'dark-theme'
   let isDarkMode = document.body.classList.contains('dark-theme');
   localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      
   if (isDarkMode) {
            themeButton.textContent = 'Включить светлую тему';
   } 
      else {
            themeButton.textContent = 'Включить тёмную тему';
      }

   // Выведите в консоль тип данных isDarkMode
    // console.log(typeof isDarkMode);
   console.log('isDarkMode = ', isDarkMode);
   console.log('typeof isDarkMode = ', typeof isDarkMode);

});


// ЗАДАНИЕ 2: Вывод данных

// 1. Найдите элемент с id="app"
const appDiv = document.getElementById('app');

// 2. Запишите в него текущую дату и время
appDiv.textContent = 'Текущая дата и время: ' + new Date().toLocaleString('ru-RU');

// Вопрос для размышления: Почему мы используем textContent, а не innerHTML?
/* Для текущей задачи не требуется изменять структуру документа. Время загрузки 
страницы является статическим (не требуется отображать динамическое время). Поэтому 
с точки зрения безопасности и скорости загрузки страницы textContent предпочтительнее 
(подробнее в README.md).
*/
/* 
   🌟 УРОВЕНЬ PRO (Extra Challenge):
   1. Добавьте на кнопку иконку (например, 🌙 или ☀️).
   2. Сделайте так, чтобы при включении темной темы иконка менялась на ☀️, 
      а при светлой — на 🌙.
   3. В CSS используйте переменные:
      :root { --bg-color: #ffffff; --text-color: #333; }
      body { background-color: var(--bg-color); color: var(--text-color); }
      body.dark-theme { --bg-color: #2c3e50; --text-color: #ecf0f1; }
*/