1 задание 

/* <!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Скрытие и показ текста</title>
</head>
<body>

  <h1 id="title">Привет, это заголовок!</h1>
  <button id="toggleBtn">Скрыть</button>

  <script>
    const title = document.querySelector('#title');
    const button = document.querySelector('#toggleBtn');

    button.addEventListener('click', function () {
      if (title.style.display === 'none') {
        title.style.display = 'block';
        button.textContent = 'Скрыть';
      } else {
        title.style.display = 'none';
        button.textContent = 'Показать';
      }
    });
  </script>

</body>
</html>
 */

2 задание

/* <!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Изменение стиля элемента</title>
</head>
<body>

  <p id="text">Это обычный текст абзаца.</p>
  <button id="colorBtn">Изменить цвет</button>

  <script>
    const paragraph = document.querySelector('#text');
    const button = document.querySelector('#colorBtn');

    button.addEventListener('click', function () {
      paragraph.style.color = 'blue';
    });
  </script>

</body>
</html>
 */


3 задание 


/* <!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Динамическое изменение текста</title>
</head>
<body>

  <h1 id="title">Исходный заголовок</h1>
  <button id="changeTextBtn">Изменить текст</button>

  <script>
    const title = document.querySelector('#title');
    const button = document.querySelector('#changeTextBtn');

    button.addEventListener('click', function () {
      title.textContent = 'Привет, мир!';
    });
  </script>

</body>
</html> */


4 задание 


/* <!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Поиск и изменение элементов по классу</title>
</head>
<body>

  <p class="description">Первое описание товара.</p>
  <p class="description">Второе описание товара.</p>
  <div class="description">Третье описание в блоке div.</div>

  <script>
    const descriptions = document.querySelectorAll('.description');

    descriptions.forEach(function (element) {
      element.textContent = 'Измененный текст';
    });
  </script>

</body>
</html>
 */

5 задание 

/* 
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Работа с querySelectorAll</title>
</head>
<body>

  <p class="description">Первый абзац с описанием.</p>
  <p class="title">Абзац без нужного класса.</p>
  <p class="description">Второй абзац с описанием.</p>
  <p class="info">Ещё один абзац с другим классом.</p>
  <p class="description">Третий абзац с описанием.</p>

  <script>
    const descriptions = document.querySelectorAll('.description');

    descriptions.forEach(function (element) {
      element.textContent = 'Новый текст';
    });
  </script>

</body>
</html> */


6 задание 

/* <!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Добавление нового элемента в DOM</title>
</head>
<body>

  <button id="addBtn">Добавить элемент</button>

  <script>
    const button = document.querySelector('#addBtn');

    button.addEventListener('click', function () {
      const newParagraph = document.createElement('p');
      newParagraph.textContent = 'Новый абзац';
      document.body.appendChild(newParagraph);
    });
  </script>

</body>
</html> */

7 задание 

/* <!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Удаление элемента</title>
</head>
<body>

  <p class="description">Первый абзац с описанием.</p>
  <p class="title">Абзац без нужного класса.</p>
  <p class="description">Второй абзац с описанием.</p>
  <p class="description">Третий абзац с описанием.</p>

  <button id="removeBtn">Удалить элемент</button>

  <script>
    const button = document.querySelector('#removeBtn');

    button.addEventListener('click', function () {
      const firstDescription = document.querySelector('.description');
      if (firstDescription) {
        firstDescription.remove();
      }
    });
  </script>

</body>
</html>
 */
