import QuestionSet from './QuestionSet'
import React from 'react'; 

 
interface LoginInfo
{
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

function StudentUI(props: LoginInfo) {
    console.log(props);

  return (
      < >
          <QuestionSet data={props.data} />  
     </>
                       
  );
}

export default StudentUI;