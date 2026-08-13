/* Игра №1 */
 
function generateRandomNumber(){
   return Math.floor(Math.random() * 100) + 1;
}
 
function playGame(){
   let userNumber = null;
   let randomNumber = generateRandomNumber();
 
   while (userNumber !== randomNumber) {
      const input = prompt('Введите число от 1 до 100');
 
      // обработка отмены
      if (input === null) {
         alert('Игра прервана.');
         return;
      }
 
      userNumber = Number(input);
 
      // обработка некорректного ввода
      if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
         alert('Введите корректное число от 1 до 100.');
         continue;
      }
 
      if (userNumber > randomNumber) {
         alert('Ваше число больше');
      } else if (userNumber < randomNumber) {
         alert('Ваше число меньше');
      } else {
         alert('Вы угадали');
      }
   }
}
 
/* Игра №2   */  
 
function arithmetic(){
 
   const operators = ['+', '-', '*', '/'];
   let operator = operators[Math.floor(Math.random() * operators.length)];
 
   let a = Math.floor(Math.random() * 10) + 1; 
   let b  = Math.floor(Math.random() * 10) + 1;
 
   let promptMessage = "";
 
   if (operator === '-') {
      promptMessage = `Вычтите ${b} из ${a}`;
   } else if (operator === '+'){
      promptMessage = `Сложите ${a} и ${b}`; 
   } else if (operator === '*'){
      promptMessage = `Умножте ${a} на ${b}`;
   } else {
      // чтобы деление давало целый результат
      // a делаем кратным b
      a = a * b;
      promptMessage = `Разделите ${a} на ${b}`;
   }
 
   const input = prompt(promptMessage);
 
   if (input === null) {
      alert('Игра прервана.');
      return;
   }
 
   const userAnswer = Number(input);
 
   if (isNaN(userAnswer)) {
      alert('Введите корректное число.');
      return;
   }
 
   let correctAnswer; 
 
   switch(operator){
      case '+' :
         correctAnswer = a + b;
         break;
      case '-' :
         correctAnswer = a - b; 
         break;
      case '*' :
         correctAnswer = a * b;
         break;
      case '/' :
         correctAnswer = a / b;
         break;      
   }
 
   if (userAnswer === correctAnswer){
      alert('Правильно!');
   } else {
      alert(`Неправильно! Правильный ответ : ${correctAnswer}`);
   }
}

/*Игра №3*/   

function turnTheTextOver(){
   let userText = prompt(`Введите текст`);
   userText = userText.split('');
   userText.reverse();
   userText = userText.join('');
   alert(` Перевёрнутый текст : ${userText}`);
}

 /*Игра №5*/   

const quiz = [
   {
       question: "Какой цвет небо?",
       options: ["1. Красный", "2. Синий", "3. Зеленый"],
       correctAnswer: 1
   },
   {
       question: "Сколько дней в неделе?",
       options: ["1. Шесть", "2. Семь", "3. Восемь"],
       correctAnswer: 1
   },
   {
       question: "Сколько у человека пальцев на одной руке?",
       options: ["1. Четыре", "2. Пять", "3. Шесть"],
       correctAnswer: 1
   }
]; 

function playQuiz() {
   let score = 0; 

   for (const item of quiz) {
       const questionText = item.question + '\n' + item.options.join('\n');
       let userAnswer;

       while (true) {
           userAnswer = prompt(questionText + '\nВведите номер ответа без дополнительных символов.');

           if (userAnswer === null) {
               alert('Игра окончена.');
               return;
           }

           userAnswer = userAnswer.trim();

           if (/^\d+$/.test(userAnswer)) {
               const answerIndex = parseInt(userAnswer) - 1; 

               if (answerIndex >= 0 && answerIndex < item.options.length) { 
                   if (answerIndex === item.correctAnswer) {
                       score++;
                   }
                   break;
               } else {
                   alert("Пожалуйста, введите номер ответа от 1 до " + item.options.length);
               }
           } else {
               alert("Пожалуйста, введите только номер ответа без дополнительных знаков.");
           }
       }
   }

   alert("Игра окончена. Ваш счет: " + score);
}