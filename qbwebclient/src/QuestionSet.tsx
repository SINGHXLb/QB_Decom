import React from 'react';
import { useEffect , useState } from "react";
import axios from 'axios'; 
import { Link } from 'react-router-dom'
import FlashCard from './FlashCard'
import Button from 'react-bootstrap/Button';
import { Console } from 'console';

interface LoginInfo {
    data: {
        token: string,
        userId: string,
        guid: string,
        emailId: string,
        sessionId: string,
        loginTime: string,
        isAuthenticated: boolean,
        isAdmin: boolean
    }
}


export const QuestionSet = (prop: LoginInfo) => {    
     
    console.log("QuestionSet.tsx");
    const initialQuestionset =
    {
        guid: "",
        questionSetName: "",
        data: "",
        creationDate: "",
        createdBy: ""
    };

   const initialQuestionsets = [initialQuestionset];
   const  [questionsets, setQuestionSet] = useState(initialQuestionsets);
   const [currentQuestionSetID, setCurrentQuestionSetID] = useState("");


   useEffect(() =>{

    var url = "https://localhost:7195/api/user/" + prop.data.guid + "/QuestionSets/";
            axios.get(url)
                .then((response) => {
                    setQuestionSet(response.data);
                })
                .catch(error => console.error('error'));
        },

        [prop.data.guid]);     


    return ( 
        < >   
            {
                currentQuestionSetID  === ""  && questionsets.map((questionset, index) =>  
                    <div>
                        <Button variant="secondary" onClick={() => setCurrentQuestionSetID(questionset.guid)} >  {questionset.questionSetName}  </Button> 
                    </div> 
                )
            }
            
            {
                currentQuestionSetID !== "" && <FlashCard questionsetId={currentQuestionSetID} />
            }
      </ >
  );
}

export default QuestionSet;
 