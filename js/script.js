// ES6

const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');

    // nawiązuje do CSS
    // p1.classList.add('bg-red');
    // p2.classList.add('bg-yellow');

    // toggle sprawia, że class pojawia się lub znika (w tej sytuacji przy naciśnięciu na btn)
    p1.classList.toggle('bg-red');
    p2.classList.toggle('bg-yellow');
    

    // p1.style.backgroundColor = 'red';
    // p2.style.backgroundColor = 'yellow';
    // zmiana style inline, nie rekomendowane
}

let btnSetBackground = document.getElementById('set-bg');

btnSetBackground.addEventListener('click', setBackground);
