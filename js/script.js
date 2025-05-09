
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
    const noteSound = new Audio(`../../notesData/${note}`);
    noteSound.play();
}

// document.getElementById('form').addEventListener('submit', send);

function send(event){

    event.preventDefault();

    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let message = document.getElementById('message').value;

   if(name && email.includes('@gmail.com') && message){
    Swal.fire( {
        title:"Server Not Available!",
        text: "Server currently not availble please try again later",
        icon: "error",
        showConfirmButton: false,
        timer: 3000,
        }
    )
   }
}

function wrongAnswerAlert(){

    const responses = ['Seems you picked the wrong answer. Do not give up', 'You are almost there.', 'Sorry try again', 'Re-examine your answer', 'Re-read the question'];

    const randomRespon = Math.floor(Math.random() * responses.length);

    Swal.fire( {
        title:"Wrong!",
        text: responses[randomRespon],
        icon: "error",
        showConfirmButton: false,
        timer: 3000,
        }
    )
}

function rightAnswerAlert(){
    const responses = ['Great work! Keep it up.', 'Excellent! You are on fire.', 'Awesome! You are doing great', 'Beautiful! You are smart', 'Genius! Keep up the good work'];

    const randomRespon = Math.floor(Math.random() * responses.length);
    Swal.fire( {
        title:"Lesson Completed",
        text: responses[randomRespon],
        icon: "success",
        showConfirmButton: false,
        timer: 3000,
        }
    )
}

function noAnswerAlert(){

    Swal.fire( {
        title:"Choose An Option",
        text: "Please enter any of the given options",
        icon: "warning",
        showConfirmButton: false,
        timer: 3000,
        }
    )
}


let formEx1 = document.getElementById('formEx1');
if(formEx1){
    formEx1.addEventListener('submit', exercise1);
}

function exercise1(event){

    event.preventDefault();

    let userOption = document.querySelector('input[name="answerEx1"]:checked');

    if(userOption){
        if(userOption.value === 'C# F G# C'){
            rightAnswerAlert();
            localStorage.setItem('lesson1', 'lesson1Completed')
        }
        else{
            wrongAnswerAlert();
        }
    } 
    else{
        noAnswerAlert();
    }
}

if(localStorage.getItem('lesson1')){
    let text = document.getElementById('exCompleted1');
    text.innerHTML = 'Completed';
    text.style.color = 'green'
}
