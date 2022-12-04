const note = 60;

if (note >= 80) {
    console.log('Parabéns, você faz parte do grupo das pessoas aprovadas!');
} else if (note < 80 && note >= 60) {
    console.log('Você está na nossa lista de espera');
} else if (note < 60) {
    console.log('Infelizmente, você reprovou');
}