

        function buildQuiz0(){
            //variable to store the html output
            const output = [];

            //for each question
            myQuestions0.forEach(
                (currentQuestion, questionNumber) => {

                    //variable to store th elist of possible answers
                    const answers = [];

                    //and for eachavailable answer...
                    for(letter in currentQuestion.answers){

                        //add html radio button
                        answers.push(
                            `<label>
                                <input type="radio" name="question${questionNumber}" value="${letter}">
                                ${letter} : 
                                ${currentQuestion.answers[letter]}
                            </label>`
                        );
                    }
                    //add this question and its answer to the output
                    output.push(
                        `<div class="question"> ${currentQuestion.question}</div>
                        <div class="answers"> ${answers.join('')}</div>`
                    );
                }
                );
                //finally, combine our output list into one string of html and put it on the page
                quizContainer0.innerHTML = output.join('');
        }

        function showResults0(){
            console.log("hello!");

            //gather answer containers from the quiz
            const answerContainers = quizContainer0.querySelectorAll('.answers');

            //keep track of user's answers
            let numCorrect = 0;

            //for each question
            myQuestions0.forEach((currentQuestion, questionNumber) => {
                //find selected answer
                const answerContainer = answerContainers[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                //if answer is correct
                if(userAnswer === currentQuestion.correctAnswer){
                    //add the number of correct answers
                    numCorrect++;
                    //color the answers green 
                    answerContainers[questionNumber].style.color = 'green';
                } 
                else{
                    //color the answer red
                    answerContainers[questionNumber].style.color = 'red';
                }
            });
            //show number of correct answers out of total
            resultsContainer0.innerHTML = `${numCorrect} out of ${myQuestions0.length}`;
        }

        

       