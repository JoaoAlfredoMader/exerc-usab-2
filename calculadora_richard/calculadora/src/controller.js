let theme = 'day';

    function addToInput(value) {
        document.getElementById('result').value += value;
    }

    function clearInput() {
        document.getElementById('result').value = '';
    }

    function calculate() {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
        addToHistory(result);
    }

    function changeTheme() {
        const body = document.querySelector('body');
        const themeButton = document.querySelector('.theme-button');
        if (body.classList.contains('night-theme')) {
            body.classList.remove('night-theme');
            themeButton.textContent = 'Modo Noturno';
        } else {
            body.classList.add('night-theme');
            themeButton.textContent = 'Modo Diurno';
        }
    }

    function addToHistory(result) {
        const history = document.getElementById('history');
        history.innerHTML += `<li>${result}</li>`;
    }