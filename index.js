const white_keys=['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const black_keys=['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');

const white_k = document.querySelectorAll('.key.white');
const black_k = document.querySelectorAll('.key.black');

keys.forEach(key => {
    key.addEventListener('click',() => playNote(key));
});


document.addEventListener('keydown', (e) => {
    
    if(e.repeat) return // If the key is pressed down don't repeat the function just end it

    const key = e.key;

    const white_key = white_keys.indexOf(key);
    const black_key = black_keys.indexOf(key);

    if(white_key > -1){
        playNote(white_k[white_key]);
    }
    if(black_key > -1){
        playNote(black_k[black_key]);
    }
})

function playNote(key){
    const audio = document.getElementById(key.dataset.note)
    audio.currentTime = 0; // Restarts the audio from the beginning whenever we click the button again
    audio.play();
    key.classList.add('active');

    audio.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}