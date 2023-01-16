document.getElementById('header-container').style.backgroundColor = 'green';

document.querySelectorAll('.emergency-tasks div')[0].style.backgroundColor = 'pink';
document.querySelectorAll('.emergency-tasks div')[1].style.backgroundColor = 'pink';

let titulosEmergencia = document.querySelectorAll('.emergency-tasks div h3')
for (let index = 0; index < titulosEmergencia.length; index += 1) {
    titulosEmergencia[index].style.backgroundColor = 'purple';
}

document.querySelectorAll('.no-emergency-tasks div')[0].style.backgroundColor = 'yellow';
document.querySelectorAll('.no-emergency-tasks div')[1].style.backgroundColor = 'yellow';

let naoETitulosEmergencia = document.querySelectorAll('.no-emergency-tasks div h3')
for (let index = 0; index < naoETitulosEmergencia.length; index += 1) {
    naoETitulosEmergencia[index].style.backgroundColor = 'black';
}

document.querySelector('#footer-container div').style.fontFamily = 'Noto Sans JP';
document.querySelector('#footer-container div').style.backgroundColor = '#629677';