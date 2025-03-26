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
