
import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios'; 
import Question from './Question';
import StatusPanel from './StatusPanel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './FlashCard.css';
/*import qs from "qs";*/


//https://localhost:7195/QB

const FlashCard = (props: { questionsetId: string, userGUID : string}) => {

   
    const initialState = [{
        guid: "",
        questionText: "",
        questionImage: "",
        questionTypes: {
            singleChoice: false,
            multiChoice: false
        },
        answers: [{ "id": "", answerText: "", answerImage: "", isAnswer: false, isChecked: false }],
        userAnswers: "",
        weight: 0,
        difficulty: 0,
        isSubmitted: false,
        hasCorrectAnswer: false,
        explanation: ""
    }];

    const questionSetinit =
    {
        guid: "",
        questions: initialState
    }

    const handleNavigationClick = (event: React.MouseEvent<HTMLInputElement>, index: number) => {
        setCurrentQuestion(index);
    }

    const flipCard = (event: React.MouseEvent<HTMLDivElement>, isfront: boolean, canflip: boolean) => {

        if (canflip) {

            event.currentTarget.classList.toggle('flipping');

        }

    }

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        //LEARN CALLING 
        //Answer change to not need rective . UPdate only the object
        setQuestionSet((questionSet) => {
            var newState = Object.assign([], questionSet);

            //Answer change to not need rective . UPdate only the object
            questionSet.questions[currentQuestionNumber].answers.forEach(answer => {
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
     
   

    const [questionSet, setQuestionSet] = useState(questionSetinit);
   /* const [questions, setQuestions] = useState(initialState);*/
    const [currentQuestionNumber, setCurrentQuestion] = useState(-1);
    const url = 'https://localhost:7195/api/User/' + props.userGUID +'/QuestionSet/'+ props.questionsetId;

    const getQuestions = () => {
        
        axios.get(url)
            .then((response) => {
                setQuestionSet(response.data)
               // setQuestions(response.data.questions);
                setCurrentQuestion(0); 
            })
            .catch(error => console.error('error'))
    }



    const submitAnswer = (currentGuid: string) => {
        const url = 'https://localhost:7195/api/AnswersExplaination/';
        //server call to check the answer , client check no good as answer values
        //shoud not be sent client side. 
        axios.get(url + currentGuid)
            .then((response) => {
                var correctAnswers:

                    {
                        "answers": [
                            {
                                "id": "",
                                "answerText": "",
                                "answerImage": "",
                                "isAnswer": true,
                                "isChecked": true
                            }
                        ],
                        "explanation": ""
                    };

                correctAnswers = response.data;

                setQuestionSet((questionSet) => {
                    var newState = Object.assign([], questionSet);
                    let hascorrectAnswers: boolean = true;

                    //set question to submitted
                    questionSet.questions.find(i => i.guid === currentGuid)!.isSubmitted = true;


                    //set correct answers in state to do react magic
                    questionSet.questions.find(i => i.guid === currentGuid)!.answers.forEach(localanswer => {
                        localanswer.isAnswer = (correctAnswers.answers.filter(correctans => correctans.id === localanswer.id).length > 0);
                    });

                    //set explanation of submitted questions 
                    questionSet.questions.find(i => i.guid === currentGuid)!.explanation = correctAnswers.explanation;

                    // if all and only correct answers are checked ,
                    //then set 'hasCorrectAnswer' property to true
                    questionSet.questions.find(i => i.guid === currentGuid)!.answers.forEach(localanswer => {
                        if (localanswer.isChecked) {
                            hascorrectAnswers = hascorrectAnswers &&
                                (correctAnswers.answers.filter(correctans => correctans.id === localanswer.id).length > 0)

                        } else {
                            hascorrectAnswers = hascorrectAnswers &&
                                (correctAnswers.answers.filter(correctans => correctans.id === localanswer.id).length === 0)

                        }

                    });
                    questionSet.questions.find(i => i.guid === currentGuid)!.hasCorrectAnswer = hascorrectAnswers;

                    return newState;

                });

            })
            .catch(error => console.error('error submitting '))

    }


    //Check if all questions are submitted  , if yes , persist user-questionset information. 
    useEffect(() => {
        const payload = {
            questionSet: {
                guid: questionSet.guid,
                questions:questionSet.questions 
            },
            userGUID: props.userGUID
        };
        console.log(payload);
        if (questionSet.questions.filter(i => i.isSubmitted).length === questionSet.questions.length) { 
            const urlP = 'https://localhost:7195/api/UserQuestionSet/';  
            axios.put(urlP, payload /*{ headers: { 'content-type': 'application/json' } }*/ ).then((response) => {
                alert(questionSet.questions.filter(i => i.isSubmitted).length)
            })
        }
    }, [questionSet,props.userGUID]);

    return (
     
        <Container>
            <Row>
                <Col>
                    <>
                      {
                          
                            console.log(questionSet.questions)

                      }
                    </>
                    
                    {
                        currentQuestionNumber === -1 &&
                        <Button variant="secondary" onClick={() => getQuestions()}> Click when ready    </Button>
                    }

                </Col>
            </Row>
            <Row>

                <Col lg="7" md="7">
                    {
                     currentQuestionNumber >= 0 &&
                        
                        <div className="card" onClick={(event) => flipCard(event, true, questionSet.questions[currentQuestionNumber].isSubmitted)}>
                            <div className="front">
                               

                                    <Question key={questionSet.questions[currentQuestionNumber].guid} data={questionSet.questions[currentQuestionNumber]} handleAnswerChange={handleAnswerChange} />

                                
                            </div>
                            <div className="back"> 

                                    {questionSet.questions[currentQuestionNumber].explanation}
                               
                            </div>
                        </div>
                    }
                </Col>

                <Col lg="3" md="3" className="d-none d-md-block" >
                    {currentQuestionNumber >= 0 &&
                        <StatusPanel data={questionSet.questions} current={currentQuestionNumber} handleNavigationClick={handleNavigationClick} />
                    }
                </Col>
                <Col>
                    {
                        currentQuestionNumber >= 0 &&
                        <Button disabled={questionSet.questions[currentQuestionNumber].isSubmitted} size="sm" onClick={() => submitAnswer(questionSet.questions[currentQuestionNumber].guid)}  >  {'Submit'}  </Button>
                    }
                  

                </Col>
            </Row>

            <Row lg="6" className="d-block d-md-none" >
                <Col >
                    {
                        currentQuestionNumber >= 0 &&
                        <Button size="sm" onClick={() => setCurrentQuestion(currentQuestionNumber - 1)} disabled={currentQuestionNumber === 0}>    {'Previous'}   </Button>
                    }
                    &nbsp;
                    {
                        currentQuestionNumber >= 0 &&
                        <Button size="sm" onClick={() => setCurrentQuestion(currentQuestionNumber + 1)} disabled={questionSet.questions.length <= currentQuestionNumber + 1}  >  {'Next'}  </Button>

                    }

                   
                </Col>

            </Row>
        </Container>


    );

}



 
export default FlashCard;
 


