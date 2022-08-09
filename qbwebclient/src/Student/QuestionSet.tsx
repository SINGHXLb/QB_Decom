import React from 'react';


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
    return ( 
       <>
            Hello +  {prop.data.guid} + {prop.data.emailId}
      </>
  );
}

export default QuestionSet;
 