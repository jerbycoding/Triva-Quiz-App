const questions = [
    {
        question : "What is the national bird of the Philippines?",
        answer : [
            {correct: false, text: "Tarsier"},
            {correct: true, text: " Philippine Eagle"},
            {correct: false, text: "Maya Bird"},
            {correct: false, text: "Kingfisher"}
        ],
        description : "The national bird of the Philippines is the Philippine Eagle, also known as the 'Pithecophaga jefferyi'."
    },
    {
        question : "Which of the following is a traditional Filipino martial art?",
        answer : [
            {correct: false, text: "Karate"},
            {correct: false, text: "Taekwondo"},
            {correct: true, text: "Arnis"},
            {correct: false, text: "Judo"}
        ],
        description: "Arnis, also known as Eskrima or Kali, is a traditional Filipino martial art. It emphasizes weapon-based fighting using sticks, knives, and other improvised weapons."
    },
    {
        question : "What is the traditional Filipino martial art of stick fighting called ?",
        answer : [
            {correct: false, text: "Pencak Silat"},
            {correct: false, text: "Krav Maga"},
            {correct: false, text: "Kendo"},
            {correct: true, text: "Eskrima"}
        ],
        description: "Eskrima, also known as Arnis or Kali, is the traditional Filipino martial art of stick fighting"
        
    },
    {
        question : "What is the traditional Filipino garment often worn on special occasions, especially weddings? ?",
        answer : [
            {correct: true, text: "Barong Tagalog"},
            {correct: false, text: "Malong"},
            {correct: false, text: "Terno"},
            {correct: false, text: "Salakot"}
        ],
        description: "The Barong Tagalog is the traditional Filipino garment often worn on special occasions, particularly weddings and formal events. It is a lightweight, embroidered shirt worn untucked over trousers. "
        
    },
    {
        question : "What is the famous Filipino dish made of marinated meat, typically pork, skewered on sticks and grilled? ?",
        answer : [
            {correct: false, text: "Sinigang"},
            {correct: false, text: "Adobo"},
            {correct: false, text: "Lechon"},
            {correct: true, text: " Pork BBQ"}
        ],
        description: "The famous Filipino dish made of marinated meat, typically pork, skewered on sticks and grilled is called Pork BBQ."
        
    },
    {
        question : "Which Filipino national hero is known as the 'Sublime Paralytic' due to being paralyzed from the waist down?",
        answer : [
            {correct: false, text: "Jose Rizal"},
            {correct: false, text: "Andres Bonifacio"},
            {correct: false, text: "Emilio Aguinaldo"},
            {correct: true, text: "Apolinario Mabini"}
        ],
        description: "Apolinario Mabini was a revolutionary leader and the first Prime Minister of the Philippines. Despite his paralysis, he played a significant role in the Philippine Revolution against Spanish colonization.i"
        
    },
    {
        question : "What is the traditional Filipino martial art that focuses on using a scarf or belt for self-defense and grappling?",
        answer : [
            {correct: false, text: " Kali"},
            {correct: false, text: "Dumog"},
            {correct: false, text: "Suntukan"},
            {correct: true, text: "Sikaran"}
        ],
        description: "Suntukan is the traditional Filipino martial art that focuses on using a scarf or belt for self-defense and grappling"
        
    },
    {
        question : "What is the traditional Filipino martial art of stick fighting called ?",
        answer : [
            {correct: false, text: "Pencak Silat"},
            {correct: false, text: "Krav Maga"},
            {correct: false, text: "Kendo"},
            {correct: true, text: "Eskrima"}
        ],
        description: "Eskrima, also known as Arnis or Kali, is the traditional Filipino martial art of stick fighting"
        
    },
    {
        question : "What is the traditional Filipino martial art of stick fighting called ?",
        answer : [
            {correct: false, text: "Pencak Silat"},
            {correct: false, text: "Krav Maga"},
            {correct: false, text: "Kendo"},
            {correct: true, text: "Eskrima"}
        ],
        description: "Eskrima, also known as Arnis or Kali, is the traditional Filipino martial art of stick fighting"
        
    },
    {
        question : "What is the name of the famous Filipino volcano that has the world's largest island in a lake on an island in a lake on an island?",
        answer : [
            {correct: false, text: "Mount Mayon"},
            {correct: false, text: "Mount Pinatubo"},
            {correct: true, text: "Taal Volcano"},
            {correct: false, text: "Mount Apo"}
        ],
        description: "The famous Filipino volcano that has the world's largest island in a lake on an island in a lake on an island is Taal Volcano"
        
    },
    {
        question : "What is the name of the traditional Filipino martial art that emphasizes grappling, joint locks, and throwing techniques?",
        answer : [
            {correct: false, text: "Pencak Silat"},
            {correct: false, text: "Capoeira"},
            {correct: true, text: "Dumog"},
            {correct: false, text: "Muay Thai"}
        ],
        description: "Dumog is the traditional Filipino martial art that emphasizes grappling, joint locks, and throwing techniques."
        
    },
    {
        question : "What is the traditional Filipino dessert made with shaved ice, sweetened fruits, sweet beans, and various toppings like leche flan and ube? ?",
        answer : [
            {correct: true, text: "Halo-halo"},
            {correct: false, text: "Bibingka"},
            {correct: false, text: "Turon"},
            {correct: false, text: "Leche Flan"}
        ],
        description: "The traditional Filipino dessert made with shaved ice, sweetened fruits, sweet beans, and various toppings like leche flan and ube is called 'Halo-halo'"
        
    }
]

let question_text = document.getElementById('question-text');
let container_answers = document.getElementById('container-answers');
let container_button = document.getElementById('container-button');
let scoreBoard_Title = document.getElementsByClassName('Title-scoreBoard');
let quiz_app = document.getElementsByClassName('quiz-app');
let choice = false;
let question_index = 0;
let score = 0;
let max= questions.length;
let correctAudio = new Audio();
let wrongAudio = new Audio();
correctAudio.src = "open-new-level-143027.mp3";
wrongAudio.src = "fail-144746.mp3";

function questionHandle(){
    question_text.innerText = questions[question_index].question;
}
function answersHandle(){
    for(let answers of questions[question_index].answer){
        let choices = document.createElement('div');
        if(answers.correct){
            choices.dataset.correct = answers.correct;
            
        }
        choices.setAttribute('class','answer');
        choices.innerText = answers.text;
        
        container_answers.append(choices);
  
    }
 
    container_answers.addEventListener('click', selectAnswer)
   
}
function selectAnswer(e){
    if(e.target.classList.contains('answer') && e.target.getAttribute('data-correct') == 'true' && !choice){
        e.target.setAttribute('class','correct-answer');
        question_text.innerText = questions[question_index].description;
        for(let disable of container_answers.children){
            if(disable.classList.contains('correct-answer')){
                correctAudio.play();
                continue;
            }
            disable.style.pointer = 'none';
            disable.style.opacity = '0.5';
        }
        choice = true;
        score = score + 1;
        scoreBoard();
        container_button.firstElementChild.style.display='block';
        
        

    }else if(e.target.classList.contains('answer') && e.target.getAttribute('data-correct') != 'true' && !choice){
        e.target.classList.add('wrong-answer');
        for(let disable of container_answers.children){
            if(disable.classList.contains('wrong-answer')){
                wrongAudio.play();
                disable.style.cursor ='default';
                continue;
            }
            disable.style.opacity = '0.5';
            disable.style.cursor= 'not-allowed';
        }
        choice = true;
        container_button.firstElementChild.style.display='block';
        
    }
    
}


function buttonHandle(){
    const next = document.createElement('button');
    next.innerText = 'Next';
    next.setAttribute('id','buttons');
    container_button.appendChild(next);
    next.addEventListener('click', nextFunction);
    next.style.display='none';
}


function nextFunction(){
    
    if(question_index < questions.length -1 ){
        question_index++;
        reset();
        start_quiz();
        choice = false;
        correctAudio.pause();
        correctAudio.currentTime = 0;
        wrongAudio.pause();
        wrongAudio.currentTime = 0;
    }else{
        question_text.innerText = '';

        container_button.remove();
        result();
    }
   

    
   
    
}

function reset(){
    while(container_answers.firstElementChild){
     container_answers.removeChild(container_answers.firstElementChild)
    }
    while(container_button.firstElementChild){
     container_button.removeChild(container_button.firstElementChild)
    }
    container_answers.removeEventListener('click',selectAnswer);
    
 }
function scoreBoard(){
    scoreBoard_Title[0].children[1].innerText = score + ' / ' + max;
    
 }
function result(){
    reset();
    let container_result = document.createElement('div');
    let image = document.createElement('img');
    if(score <= 1){
        image.src ='c.jpg';
    }else if(score > 5 &&  score <= 11){
        image.src = 'b.jpg';
    }else if(score == max){
        image.src = 'a.jpg';
    }
    
    image.width = 190;
    image.height =  200;
    container_result.setAttribute('id','styleResult');
    question_text.innerText = "Congratulation here's your score";
    question_text.style.fontSize =' 35px';
    let resultScore = document.createElement('h1');
    resultScore.innerText = 'You got '+ score + " points";
    resultScore.setAttribute('id','result');
    container_result.append(image)
    container_result.append(resultScore);
    container_answers.append(container_result);
    
   

}

function start_quiz(){
    
    scoreBoard();
    questionHandle();
    answersHandle();
    buttonHandle();
    
    
}



start_quiz();





