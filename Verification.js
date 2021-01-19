import UI from "./class/UI.js";

class Verification {
    static getAnswers(results){
        const answers = []
        results.forEach(result => {
            answers.push(result.correct_answer)
        });
        return answers
    }

    static CheckResults(arrayAnswers,totalQuestions){ 
        let counter = 0;
        let radioButtons = [...document.querySelectorAll(".radiobtns:checked")].map(element => element.value)
        
        for(let i = 0; i < arrayAnswers.length; i++){
            let txt = document.createElement("textarea");
            txt.innerHTML = arrayAnswers[i];
            let value = txt.value;
            arrayAnswers.splice(i, 1, value)
            txt.remove()
        }
        
        for(let i = 0; i < arrayAnswers.length; i++){
            if(arrayAnswers[i] == radioButtons[i]){
                counter += 1
            }
        }
        
        if(counter == totalQuestions){
            UI.printGreatResult()
        }else {
            UI.printResult(counter, totalQuestions)
        }
        
    }

    static getTotalQuestions(){
        const totalValue = document.getElementById('total-questions').value
        return totalValue
    }
}

export default Verification