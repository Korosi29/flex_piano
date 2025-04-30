
function openMenu(){
    let menuElement = document.getElementById('menu');
    if(menuElement.style.display === 'flex'){
        menuElement.style.display = 'none';
        document.getElementById("harmburger").classList.remove('fa-x');
    } else {
        menuElement.style.display = 'flex';
        document.getElementById("harmburger").classList.add('fa-x');
    }
}

function pressKey(key){
    key = document.querySelector(key);
    if(key.classList.contains('black'))
    {
        key.style.backgroundColor = '#333';
    } else {
        key.style.backgroundColor = '#c0c0c0';
    }
    
}
function showVirtualPiano() {
    let vPianoEl = document.querySelector('.virtual-piano-con');
    if(vPianoEl.style.display !== 'flex'){
        vPianoEl.style.display = 'flex';
    }
    else{
        vPianoEl.style.display = 'none';
    }
}

function playSound(note){
    const noteSound = new Audio(`notesData/${note}`);
    noteSound.play();
}