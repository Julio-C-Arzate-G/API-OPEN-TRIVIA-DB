class UI {
    static printCategories(categories) {
        const container = document.getElementById('categories');
        categories.forEach(category => {
            container.innerHTML += `<option value="${category.id}">${category.name}</option>`;
        });
    }

    static printQuestions(questions) {
        const container = document.getElementById('questions-container');
        container.innerHTML = '';
        questions.forEach((question) => {
            container.innerHTML += `<div class="col-md-6 mt-4 text-center">
                                        <div class="card h-100">
                                            <div class="card-body-question h-100">
                                               ${question.question}
                                               ${this.printAnswers(question)}
                                            </div>
                                        </div>
                                    </div>`;
        })
        container.innerHTML +=`
        <div class="container mt-5">
            <div class="row justify-content-center mb-5">
                <button class="btn btn-outline-success">
                GET YOUR RESULT
                </button>
            </div>
        </div>
        `
    }

    static printAnswers(element){
        let correctAnswer = element.correct_answer;
        let incorrectAnswer = element.incorrect_answers;
        let arrayOfAnswers = [...incorrectAnswer]
        arrayOfAnswers.splice(Math.floor(Math.random() * 4), 0, correctAnswer)
        let optionsQuestion = '';

        arrayOfAnswers.forEach(answer => {
            optionsQuestion += `
            <div class="radio mt-3">
                <label class="bc-black"><input class="radiobtns" value="${answer}" type="radio" name="${element.question}" required>${answer}</label>
            </div>
            `
        })

        return optionsQuestion;
    }

    static printError(){
        const container = document.getElementById('questions-container');
        container.innerHTML = '';
        let html = `
        <div class="container mt-5">
            <div row justify-content-center>
                    <div class="card h-100">
                        <div id="this-card" class="card-body"> 
                        <h2 class="text-center">Sorry, insufficient questions</h2>
                        </div>
                    </div>
            </div>    
        </div>
        `;
        return container.innerHTML = html
    }

    static printGreatResult(){
        alert("Great! All the answers are correct")
    }

    static printResult(counter, totalQuestions){
        alert(`Your result:  ${counter} / ${totalQuestions}`)
    }
}

export default UI