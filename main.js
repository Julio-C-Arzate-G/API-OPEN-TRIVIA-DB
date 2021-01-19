import Request from './class/Request.js';
import UI from './class/UI.js';
import Verification from '/Verification.js'


let correctAnswers = [];
let totalQuestionsNum = 0;
const form = document.querySelector('#form-questions');

// -------------------Get Categories---------------------------------
Request.getCategories()
    .then(response => response.json())
    .then(data => UI.printCategories(data.trivia_categories))

//--------------------Get Questions---------------------------------
form.addEventListener('submit', (event) => {
    event.preventDefault();
    Request.getQuestions()
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) { 
                UI.printQuestions(data.results)
                correctAnswers = [...Verification.getAnswers(data.results)]; 
                console.log(correctAnswers)   
                totalQuestionsNum = Verification.getTotalQuestions()
                console.log(totalQuestionsNum)
            } else {
                UI.printError()
            } 
            console.log(data.results)
        })
});

//---------------------Check Results--------------------------------
const checkForm = document.querySelector('#check');
checkForm.addEventListener('submit', () => {
    Verification.CheckResults(correctAnswers,totalQuestionsNum)
})