
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

let contactMeBtn = document.getElementById('form');
if(contactMeBtn){
    contactMeBtn.addEventListener('submit', contactMe);
}
function contactMe(event){

    event.preventDefault();

    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let message = document.getElementById('message').value;

   if(name && email.includes('@gmail.com') && message){
    Swal.fire( {
        title:"Server Not Available!",
        text: "Server currently not availble please try again later",
        icon: "error",
        confirmButtonColor: "#d03543",
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
        confirmButtonText: "<b>Try again</b>",
        confirmButtonColor: "#d03543",
        }
    )
}

function rightAnswerAlert(lesson){
    const responses = ['Great work! Keep it up.', 'Excellent! You are on fire.', 'Awesome! You are doing great', 'Beautiful! You are smart', 'Genius! Keep up the good work'];

    const randomRespon = Math.floor(Math.random() * responses.length);
    Swal.fire( {
        title:"Lesson Completed",
        text: responses[randomRespon],
        icon: "success",
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: "<b>Next Lesson</b>",
        confirmButtonColor: "#008020",
        }
    ).then((result) => {
        if(result.isConfirmed){
            window.location.href = `../lessons/lesson${lesson}.html`;
        }else{
        }
    })
}

function noAnswerAlert(){

    Swal.fire( {
        title:"Choose An Option",
        text: "Please enter any of the given options",
        icon: "warning",
        confirmButtonText: "<b>Alright</b>",
        confirmButtonColor: "#c08000",
        }
    )
}


let formEx = document.getElementById('formEx');
if(formEx){
    formEx.addEventListener('submit', exercise);
}

function exercise(event){

    event.preventDefault();

    let lessonIndx = parseInt(document.getElementById('submit').value);

    const nextLessonNumber = lessonIndx + 1;

    let userOption = document.querySelector('input[name="answerEx"]:checked');
    if(userOption){
        if(userOption.value === 'right'){
            rightAnswerAlert(nextLessonNumber);//pass Number of next lesson;
            localStorage.setItem(`lesson${lessonIndx}`, 'lessonCompleted');
        }
        else{
            wrongAnswerAlert();
        }
    } 
    else{
        noAnswerAlert();
    }
}





for (let i = 0; i < 15; i++) {
    if(localStorage.getItem(`lesson${i}`)){
        let text = document.getElementById(`exCompleted${i}`);
        if(text){
            text.innerHTML = 'Completed';
            text.style.color = 'green';
        }
    }    
    
}