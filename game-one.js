document.querySelector(selectors:'.game__button') .addEventListener(type: 'click', game1);

function game1() {

    const hiddenNumber = Math.floor(Math.random() * 100) + 1;
    
       while (true) {
    
        const input = Number(prompt('Попробуй угадать число от 1 до 100'));
    
        if (input === 0) {
            alert('Попробуй еще!');
            return;
        }
    
        if (input === hiddenNumber) {
            alert(`Молодец! Верно! ${hiddenNumber}`);
            break;
        }
    
        else if (input < hiddenNumber) {
            alert('Число должно быть больше!');
       } else {
        alert('Число должно быть меньше')
        }
      }
    
    }