
import React from 'react';
import { useState } from "react";
import axios from 'axios'; 
import Question from './Question';
import StatusPanel from './StatusPanel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



//https://localhost:7195/QB

const Display = () => {

    const initialState = [{
        guid: "",
        question: {
            questionText: "",
            questionImage: "",
            questionTypes: {
                singleChoice: false,
                multiChoice: false
            },
            answers: [{ "id":"", answerText: "", answerImage: "", isAnswer: false , isChecked:false }],
            userAnswers: "",
            weight: 0,
            difficulty: 0,
            isSubmitted: false,
            hasCorrectAnswer:false
        }
    }];
                         
    const handleNavigationClick = (event: React.MouseEvent<HTMLInputElement>, index: number) =>  {
        setCurrentQuestion(index);
    }

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        //LEARN CALLING 
        //Answer change to not need rective . UPdate only the object
        setQuestions((questions) => {
            var newState = Object.assign([], questions);

            //Answer change to not need rective . UPdate only the object
            questions[currentQuestionNumber].question.answers.forEach(answer => {
                //checkbox
                if (event.target.type === "checkbox" && answer.id === event.target.id) {
                    answer.isChecked = event.target.checked;
                }
                //radio 
                if (event.target.type === "radio") {
                    if (answer.id === event.target.id && event.target.checked) {
                        answer.isChecked = true;
                    }
                    else {
                        answer.isChecked = false;
                    }
                }
                console.log(answer.answerText + " is " + String(answer.isChecked));
                
            });  
            console.log("---------------------------------------------------");
            return newState;

        });



     


    };



    const [questions, setQuestions] = useState(initialState); 
    const [currentQuestionNumber, setCurrentQuestion] = useState(-1); 
    const url = 'https://localhost:7195/api/Questions/'; 

    const getQuestions = () => {
        axios.get(url)
            .then((response) => {
                setQuestions(response.data);
                setCurrentQuestion(0);

            })
            .catch(error => console.error('error'))
        
       
    } 

    const submitAnswer = (currentGuid: string) => { 
        const url = 'https://localhost:7195/api/Questions/CorrectAnswer/'; 
        //server call to check the answer , client check no good as answer values
        //shoud not be sent client side. 
            axios.get(url + currentGuid )
                .then((response) => {
                    var correctAnswers: [{ "id": "", answerText: "" }]; 
                    correctAnswers = response.data;
                    console.log(correctAnswers);

                    setQuestions((questions) => {
                        var newState = Object.assign([], questions);
                        let hascorrectAnswers: boolean = true; 
                        
                        //set question to submitted
                        questions.find(i => i.guid === currentGuid)!.question.isSubmitted = true;

                        //set correct answers in state to do react magic

                        questions.find(i => i.guid === currentGuid)!.question.answers.forEach(localanswer => {
                            localanswer.isAnswer = (correctAnswers.filter(correctans => correctans.id === localanswer.id).length > 0);
                        });


                        // if all and only correct answers are checked ,
                        //then set 'hasCorrectAnswer' property to true
                        questions.find(i => i.guid === currentGuid)!.question.answers.forEach(localanswer => {
                            if (localanswer.isChecked) {
                                hascorrectAnswers = hascorrectAnswers &&
                                    (correctAnswers.filter(correctans => correctans.id === localanswer.id).length > 0)
                                
                            } else
                            {
                                hascorrectAnswers = hascorrectAnswers &&
                                    (correctAnswers.filter(correctans => correctans.id === localanswer.id).length === 0)
                               
                            }

                        });
                        questions.find(i => i.guid === currentGuid)!.question.hasCorrectAnswer = hascorrectAnswers; 
                        return newState;

                    });

                })
                .catch(error => console.error('error submitting '))


      
       
        
    }

   

    return (
        <Container>
            <Row>
                 <Col>

                    {
                        currentQuestionNumber === -1 &&
                        <Button variant="secondary" onClick={() => getQuestions()}>   Load Questions  </Button>
                    }

               </Col>
            </Row>
            <Row>
              
               
                <Col lg="7" md="7">
                    {
                        currentQuestionNumber >= 0 &&
                        <Question key={questions[currentQuestionNumber].guid} data={questions[currentQuestionNumber]} handleAnswerChange={handleAnswerChange}  />

                    }


                </Col>
                
                <Col lg="3" md="3"  className="d-none d-md-block" >

                    <StatusPanel data={questions} current={currentQuestionNumber} handleNavigationClick={handleNavigationClick} /> 

                </Col>
                <Col> 
                    {
                        currentQuestionNumber >= 0 &&
                        <Button disabled={questions[currentQuestionNumber].question.isSubmitted} size="sm" onClick={() => submitAnswer(questions[currentQuestionNumber].guid)}  >  {'Submit'}  </Button>
                    }
                </Col>
            </Row>
            <Row lg="6"  className="d-block d-md-none" >
                <Col >
                    {
                        currentQuestionNumber >= 0 &&
                        <Button  size="sm"  onClick={() => setCurrentQuestion(currentQuestionNumber - 1)} disabled={currentQuestionNumber === 0}>    {'Previous'}   </Button>
                    }
                    &nbsp;
                    {
                        currentQuestionNumber >= 0 &&
                        <Button size="sm"  onClick={() => setCurrentQuestion(currentQuestionNumber + 1)} disabled={questions.length <= currentQuestionNumber + 1}  >  {'Next'}  </Button>

                    }
                  

                </Col> 

            </Row>
           

            </Container>
    ); 

    

   


}



 
export default Display;
 

