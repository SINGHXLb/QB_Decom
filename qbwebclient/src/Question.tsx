import React from 'react';

import Accordion from 'react-bootstrap/Accordion';



import './Question.css';


interface Questionset {
    data: {
        guid: string
        question: {
            questionText: string;
            questionImage: string;
            questionTypes: { singleChoice: boolean, multiChoice: boolean };
            answers: {id:string, answerText: string, answerImage: string, isAnswer: boolean, isChecked: boolean }[];
            weight: number;
            difficulty: number;
            isSubmitted: boolean;
            hasCorrectAnswer: boolean;
        }
       
    }, handleAnswerChange: React.ChangeEventHandler<HTMLInputElement> 

}


const getStyle = ( isSubmitted: boolean, isAnswer: boolean , isChecked:boolean): string => {

    var style = [""];
    if (isSubmitted && isAnswer && isChecked ) { style.push("correctanswer") }
    if (isSubmitted && !isAnswer && isChecked) { style.push("wronganswer") }

    if (isSubmitted && isAnswer && !isChecked) { style.push("wronganswer") }
    if (isSubmitted && !isAnswer && !isChecked) { style.push("correctanswer") }

    if (!isSubmitted) { style.push("Answer") }
    
    return style.join(" ");
} 

export const Question = (props: Questionset  ) => {

    return (
        <div>
            <div className="Question" >

                {props.data.question.questionText}
             
                {
                    (!!props.data.question.questionImage) &&
                    <Accordion >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Display Image</Accordion.Header>
                                <Accordion.Body>
                                {/*    <img src={props.data.question.questionImage}  />*/}
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                }

            </div>

            {
                props.data.question.answers.map((ans, index) => (
                    <div className={getStyle(props.data.question.isSubmitted, ans.isAnswer, ans.isChecked)}>

                        {
                            props.data.question.questionTypes.multiChoice ?
                                <div>
                                    <input key={"txt" + ans.id} id={ans.id} type="checkbox" name={props.data.guid} checked={ans.isChecked} onChange={props.handleAnswerChange} /> {ans.answerText}
                                   {/* <img key={"img"+ans.id}  src={ans.answerImage}  />*/}
                                </div>
                     
                       :
                                <div>
                                    <input key={"txt" + ans.id}  id={ans.id} type="radio" name={props.data.guid} checked={ans.isChecked} onChange={props.handleAnswerChange} /> {ans.answerText} 
                                    {/*<img key={"img" + ans.id} src={ans.answerImage}  />  */}
                            </div> 
                        }
                     
                       
                     </div>
                ))
            }
        </div >
    )
}


export default Question;

