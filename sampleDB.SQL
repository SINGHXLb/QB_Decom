USE [DB1]
GO

--delete from users where GUid not in (select  userGuid from [UserQuestionSet]) 

--select * from users 
INSERT INTO [dbo].[Users] VALUES   (newID(),'p@gmail.com', 'Purvi', null,0,'2008-06-08','script','2022-06-01')
INSERT INTO [dbo].[Users] VALUES   (newID(),'q@gmail.com', 'Pushpe', null,0,'2008-06-08','script','2022-06-01')
INSERT INTO [dbo].[Users] VALUES   (newID(),'r@gmail.com', 'rekha', null,0,'2008-06-08','script','2022-06-01')
update [dbo].[Users]  set LastName = 'Pa'
GO

USE [DB1]
GO

delete from [QuestionSet]

INSERT INTO [dbo].[QuestionSet] VALUES (newID(), 'Hindi', 

N'[
{ "Guid":"81F4C886-4C82-4E71-B1DC-08C940F90090",        "Topic": "",    "Concept": [ "Concept1", "Concept1"],    "tags": ["important","1998"],    "QuestionText": "हिंदी प्रश्न : एक से अधिक उत्तर का चयन कीजिये ",    "QuestionImage":"",    "QuestionTypes": {      "SingleChoice": false,      "MultiChoice": true    },    "Answers":  [ {     "ID":1,    "AnswerText" : "उत्तर एक *** " ,    "AnswerImage" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAABFCAIAAABIeNQZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADISURBVHhe7dJBDQAwEAShNXGeK7s25kGCBPZ2UOAiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS7SsPs0d+C3fb0nyQAAAABJRU5ErkJggg==" ,          "IsAnswer": true      },       {      "ID":2,        "AnswerText": "इनपुट उपकरण आपके द्वारा चुनी गई भाषा में वेब पर कहीं भी लिखना आसान बनाता है ***",      "AnswerImage" :"",         "IsAnswer": true      },       {       "ID":3,        "AnswerText": "उत्तर तीन ",      "AnswerImage" :"",         "IsAnswer": false      },      {    "ID":4,        "AnswerText": "चार",     "AnswerImage" :"",         "IsAnswer": false      },      {     "ID":5,        "AnswerText": "पांच ",     "AnswerImage" :"",         "IsAnswer": false      }    ],    "Weight": 1,    "Difficulty": null,    "CreatedOn": "2012-04-23T18:25:43.511Z",    "IsVerified": false,    "Explanation" : "New Explanation tests a"  }
,{"Guid":"E3A70B82-AB9F-4EB4-A375-92943A7DEACA",    "Topic": "",    "Concept": [ "Concept1", "Concept1"],    "tags": ["important","1998"],    "QuestionText": "केवल एक उत्तर का चयन कीजिये  ",    "QuestionImage":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT0AAADwCAIAAAD9+CQUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAfoSURBVHhe7d09ehpZFoBhmLVYDvrRCmAF9iQddToZhHLSWYfOJpFCsYSOHMEK0Ar8TGDYC31V0B5b7bqWRFF1z633TUCQGJlP51Tpp6aHw2EChPKv0y0Qh24hHt1CPLqFeHQL8egW4tEtxKNbiEe3EI9uIR7dQjy6hXh0C/HoFuLRLcSjW4hHtxCPbiEe3UI8uoV4dAvx6Bbi0S3Eo1uIR7cQj24hHt1CPLqFeHQL8egW4tEtxKNbiEe3EI9uIR7dQjy6hXh0C/HoFuLRLcSjW4hHtxCPbiEe3UI8uoV4dAvx6Bbi0S3Eo1uIR7cQj24hHt1CPLqFeHQL8egW4tEtxKNbiGd6OBxOdyObTqfHO3W8HMirYd5+jTb59j7UqsI9OaWrXupW7fGtdKlYzeelpEutKj+f3KzM6qU2lXd7JF0qM4puE4OXmlTYbeZbuNKlDnXO25RuW73SpQI178mZdNVLaJUf3xq8VGkU56WkS2VG0W2SSVe9hDOWbpNmZTZ4qcGIuj0yeKnA6LpN2tJNpEsIY+w2aVZmOzNRjbTbo0y66qVko+42MXiJaOzdHkmXWHR7kklXvZRGt//XrMwGLwHo9imDl/Lp9gfa0k2kSwl0+2PNymxnplC6zcmkq14GpNufMHgpkG6fRboURbfPlUlXvfRMty/QrMwGL8PT7YsZvAxOt6/Rlm4iXXqg21dqVmY7M8PQ7Vky6aqXy9HtuQxe+qfbbkiXPum2M5l01Uu3dNulZmU2eLk43XbP4OXSdHsRbekm0uV8ur2UZmW2M3MRur2sTLrq5dV0e3EGL53TbU+KT3e/3yzn82YNmE7n8+Vmf3qCAk3b3k+BpPfZ6V6j5Ff05J/6rWH/2fu7+dWHh8lstri+nnxerR7SY7PFenv/7vg8ZTFve5XibOszk3Q/FuvdYbu9T7aH3XoxmTysPt4ZumUyb4dR7OD923EAz25325s3p4coh3k7jEycgw/expu316d7FEi3g0npttVbRrqUS7cDy6Q7aL2bT6vJZPbbvy3JRdLt8MoavPtks5y/T9ku/nBsWyjdlqKIdDfL6VWSol3crne+CVQs55PLkqm0j9fVnEWeOIlcPPO2LCnOtj4HPdylLLotUSZd9ZLYk8uVSbSa18jrmLflSnG29XmhqbvfLB8H+nJz+phS6bZ0mXST0weMjD05jLZKa329ZJi3YfS8M1My3UZiZ+ZIt8GkdA1edBuSwTtyuo2qLd1EutXTbWDNymxnHiPdhpdJV7210m0NDN6x0W09pDseuq1KJl311kS3tWlWZoO3crqtk8Fbtw66/e7CMtP58s6VZYrQlm6S/p9O94jp3N8HOl1X5vsLy0wW60OPf1PsybvwzFdUn7ZKfaLi6mDezm6/vbDM7Sw95MIyJbEz16fz3789DeA+J+6TN58x0qatUp+xcC50Xmr2y9XpHuXIDN7TPYLovNvd/x6PcK/f+vu7RbIz16Hjbvd3H1fpZvGrv3RfrJSuwRtdp93u7/7zeG55sXaBiuIZvKF12O1m+XhCanbrsjJBtKWbSLdwXXW7vztewW3tyjKRNCuznTmeTrod4Hs/dCiTrnrLdH63X6O1Hwdm8MZy7s9dbJbTx/14tlhcnx45+eXX+5ueOn7yxjrzFY1cW6U+q0U5s9u/fzz5n2b9XURVt93KDFif20K4zgg/ZvCWrNPv31KRtj5Tz21J0xvd0iozWqU7LN2Sk9LNDN7TPXqnW34uk656B6FbnsXgLYpueQHpFkK3vEwmXfX2Rre8WLMyG7xD0i2vZPAOSLe8Xlu6iXQvSrecpVmZ7cx90y0dyKSr3kvQLd0wePukW7ok3X7olo5l0lVvV3RL95qV2eC9IN1yKQbv5eiWC2pLN5HuOXTLZTUrs525Y7qlD5l01fsKuqUnBm+HdEuvpNsJ3dK3TLrqfSbdMoBmZTZ4X0+3DMbgfTXdMqS2dBPpZuiWgTUrs535ZXRLETLpqvefdEspDN7n0y1lke5z6JbiZNJV75FuKVGzMhu8rXRLuQzeNrqlaG3pJmNOV7eUrlmZ7czf0S0xZNIdYb26JQyD9yvdEox0E90STybdkdSrW0JqVubxDl7dEthoB69uia0t3aTidHVLeM3KPK6dWbdUIpNuffXqlnqMZ/DqltqMIV3dUqFMunXUq1vq1KzM1Q5e3VKzWgfvtO2FBVLBl0+GEvT9b94yakG/6OsW4tEtxFNDtxUcojOUoG+eGs5LwdjYkyEe3UI8uoV4dAvx6Bbi0S3Eo1uIR7cQj24hHt1CPLqFeHQL8egW4tEtxKNbiEe3EI9uIR7dDmm/3yzn8+ZP+Sbz5d1mf3oGcvydmuFsltP3q8lkNltcX08+r1YPjw8u1of7d83T0Mq8Hcz+y+fZ7Xp32G7vk+1hdztLj64+bY5PQzvzthz7u/nVh4fZ7W578+b0EPyQeQvxmLfFOB7uOr7lGXQ7qP1ms0s3X758+vPD6mEyW6y3quXndDuk4xHt6YNJyvb2j99v3jm45Wcc3w7pzc02fd1s7HbrxWT14f3V/M73cPkZ87YkDnF5HvO2PJ+/mLjk6XYo6dh2/v3PNe43n1aPt9dvHeGSZ08eytdzUrPF4jrd+EFHnk+3A9pv7v778c/Vw/GM8my2+M3pZJ5FtxCP41uIR7cQj24hHt1CPLqFeHQL8egW4tEtxKNbiGYy+QuiMWzmIXNcRAAAAABJRU5ErkJggg==",    "QuestionTypes": {      "SingleChoice": true,      "MultiChoice": false    },     "Answers":  [ {        "ID":1,    "AnswerText" : "उत्तर एक ***" ,    "AnswerImage" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAABFCAIAAABIeNQZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADISURBVHhe7dJBDQAwEAShNXGeK7s25kGCBPZ2UOAiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS7SsPs0d+C3fb0nyQAAAABJRU5ErkJggg==" ,                "IsAnswer": true      },       {      "ID":2,        "AnswerText": "इनपुट उपकरण आपके द्वारा चुनी गई भाषा में वेब पर कहीं भी लिखना आसान बनाता है",      "AnswerImage" :"",         "IsAnswer": false      },       {      "ID":3,        "AnswerText": "उत्तर तीन ",      "AnswerImage" :"",         "IsAnswer": false      },      {     "ID":4,        "AnswerText": "चार",     "AnswerImage" :"",         "IsAnswer": false      },      {     "ID":5,        "AnswerText": "पांच ",     "AnswerImage" :"",         "IsAnswer": false      }    ],    "Weight": 1,    "Difficulty": null,    "CreatedOn": "2012-04-23T18:25:43.511Z",    "IsVerified": false,     "Explanation" : "New Explanation tests B"  }
,{"Guid":"3A09E777-ED1C-4B62-A89A-ECB8E596D27A",  "Topic": "",    "Concept": [ "Concept1", "Concept1"],    "tags": ["important","1998"],    "QuestionText": "What is your name ?",    "QuestionImage":"",    "QuestionTypes": {      "SingleChoice": false,      "MultiChoice": true    },     "Answers":  [ {        "ID":1,    "AnswerText" : "तुम्हारा नाम क्या है ? **" ,    "AnswerImage" : "" ,        "IsAnswer": true      },       {        "ID":2,        "AnswerText": "तेरा नाम क्या है ? **",      "AnswerImage" :"",         "IsAnswer": true      },       {      "ID":3,        "AnswerText": "क्या है तेरा नाम ? **",      "AnswerImage" :"",         "IsAnswer": true      },      {     "ID":4,        "AnswerText": "क्या नाम ? ",     "AnswerImage" :"",         "IsAnswer": false      },      {     "ID":5,        "AnswerText": "पांच ",     "AnswerImage" :"",         "IsAnswer": false      }    ],    "Weight": 1,    "Difficulty": null,    "CreatedOn": "2012-04-23T18:25:43.511Z",    "IsVerified": false,    "Explanation" : "New Explanation CC"  }
]'
 ,getdate(), null)



 INSERT INTO [dbo].[QuestionSet] VALUES (newID(), 'Mothers love', 

  N'[
{ "Guid":"81F4C886-4C82-4E71-B1DC-08C940F90090",        "Topic": "",    "Concept": [ "Concept1", "Concept1"],    "tags": ["important","1998"],    "QuestionText": "हिंदी प्रश्न : एक से अधिक उत्तर का चयन कीजिये ",    "QuestionImage":"",    "QuestionTypes": {      "SingleChoice": false,      "MultiChoice": true    },    "Answers":  [ {     "ID":1,    "AnswerText" : "उत्तर एक *** " ,    "AnswerImage" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAABFCAIAAABIeNQZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADISURBVHhe7dJBDQAwEAShNXGeK7s25kGCBPZ2UOAiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS7SsPs0d+C3fb0nyQAAAABJRU5ErkJggg==" ,          "IsAnswer": true      },       {      "ID":2,        "AnswerText": "इनपुट उपकरण आपके द्वारा चुनी गई भाषा में वेब पर कहीं भी लिखना आसान बनाता है ***",      "AnswerImage" :"",         "IsAnswer": true      },       {       "ID":3,        "AnswerText": "उत्तर तीन ",      "AnswerImage" :"",         "IsAnswer": false      },      {    "ID":4,        "AnswerText": "चार",     "AnswerImage" :"",         "IsAnswer": false      },      {     "ID":5,        "AnswerText": "पांच ",     "AnswerImage" :"",         "IsAnswer": false      }    ],    "Weight": 1,    "Difficulty": null,    "CreatedOn": "2012-04-23T18:25:43.511Z",    "IsVerified": false,    "Explanation" : "New Explanation tests a"  }
,{"Guid":"E3A70B82-AB9F-4EB4-A375-92943A7DEACA",    "Topic": "",    "Concept": [ "Concept1", "Concept1"],    "tags": ["important","1998"],    "QuestionText": "केवल एक उत्तर का चयन कीजिये  ",    "QuestionImage":"data:image/png;base64,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",    "QuestionTypes": {      "SingleChoice": true,      "MultiChoice": false    },     "Answers":  [ {        "ID":1,    "AnswerText" : "उत्तर एक ***" ,    "AnswerImage" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAABFCAIAAABIeNQZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADISURBVHhe7dJBDQAwEAShNXGeK7s25kGCBPZ2UOAiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS7SsPs0d+C3fb0nyQAAAABJRU5ErkJggg==" ,                "IsAnswer": true      },       {      "ID":2,        "AnswerText": "इनपुट उपकरण आपके द्वारा चुनी गई भाषा में वेब पर कहीं भी लिखना आसान बनाता है",      "AnswerImage" :"",         "IsAnswer": false      },       {      "ID":3,        "AnswerText": "उत्तर तीन ",      "AnswerImage" :"",         "IsAnswer": false      },      {     "ID":4,        "AnswerText": "चार",     "AnswerImage" :"",         "IsAnswer": false      },      {     "ID":5,        "AnswerText": "पांच ",     "AnswerImage" :"",         "IsAnswer": false      }    ],    "Weight": 1,    "Difficulty": null,    "CreatedOn": "2012-04-23T18:25:43.511Z",    "IsVerified": false,     "Explanation" : "New Explanation tests B"  }
,{"Guid":"3A09E777-ED1C-4B62-A89A-ECB8E596D27A",  "Topic": "",    "Concept": [ "Concept1", "Concept1"],    "tags": ["important","1998"],    "QuestionText": "What is your name ?",    "QuestionImage":"",    "QuestionTypes": {      "SingleChoice": false,      "MultiChoice": true    },     "Answers":  [ {        "ID":1,    "AnswerText" : "तुम्हारा नाम क्या है ? **" ,    "AnswerImage" : "" ,        "IsAnswer": true      },       {        "ID":2,        "AnswerText": "तेरा नाम क्या है ? **",      "AnswerImage" :"",         "IsAnswer": true      },       {      "ID":3,        "AnswerText": "क्या है तेरा नाम ? **",      "AnswerImage" :"",         "IsAnswer": true      },      {     "ID":4,        "AnswerText": "क्या नाम ? ",     "AnswerImage" :"",         "IsAnswer": false      },      {     "ID":5,        "AnswerText": "पांच ",     "AnswerImage" :"",         "IsAnswer": false      }    ],    "Weight": 1,    "Difficulty": null,    "CreatedOn": "2012-04-23T18:25:43.511Z",    "IsVerified": false,    "Explanation" : "New Explanation CC"  }
]'
 ,getdate(), null)

 select * from [QuestionSet]


USE [DB1]

GO
 Declare @userGuid varchar(50)
 Declare @questionsetGuid1 varchar(50)
  Declare @questionsetGuid2 varchar(50)
 Declare @data1  nvarchar(max)
  Declare @data2  nvarchar(max)
 
  
 select  @userGuid = [Guid]  from [Users] where Email  = 'p@gmail.com'
 select  @questionsetGuid1 = max([Guid]) from [QuestionSet]
 select  @questionsetGuid2 = min([Guid]) from [QuestionSet]
 select  @data1 = max(Data) from [QuestionSet]
 select  @data2 = max(Data) from [QuestionSet]
 
delete from [dbo].[UserQuestionSet]
INSERT INTO [dbo].[UserQuestionSet] VALUES  (newID()  ,@userGuid   ,@questionsetGuid1   ,@data1 ,0  ,getdate()  ,null)
INSERT INTO [dbo].[UserQuestionSet] VALUES  (newID()  ,@userGuid   ,@questionsetGuid2   ,@data2 ,0  ,getdate()  ,null)



GO

 


 --------------HIndi Multi choice  choice
 delete from  [questionStore]
INSERT INTO [dbo].[questionStore]
           ([guid]
           ,[Data],[CreationDate])
     VALUES
           (newID(), N'{ 
	"Guid":"updatelater to questionStore.guid",	   
  "Topic": "",
  "Concept": [ "Concept1", "Concept1"],
  "tags": ["important","1998"],
  "QuestionText": "हिंदी प्रश्न : एक से अधिक उत्तर का चयन कीजिये ",
  "QuestionImage":"",
  "QuestionTypes": {
    "SingleChoice": false,
    "MultiChoice": true
  },
  "Answers":  [ { 
	 "ID":1,
	 "AnswerText" : "उत्तर एक *** " ,
	 "AnswerImage" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAABFCAIAAABIeNQZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADISURBVHhe7dJBDQAwEAShNXGeK7s25kGCBPZ2UOAiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS7SsPs0d+C3fb0nyQAAAABJRU5ErkJggg==" ,

      "IsAnswer": true
    },
     {
	 	 "ID":2,
      "AnswerText": "इनपुट उपकरण आपके द्वारा चुनी गई भाषा में वेब पर कहीं भी लिखना आसान बनाता है ***",
	   "AnswerImage" :"", 
      "IsAnswer": true
    },
     {
	  	 "ID":3,
      "AnswerText": "उत्तर तीन ",
	   "AnswerImage" :"", 
      "IsAnswer": false
    },
    {
	 "ID":4,
      "AnswerText": "चार",
	  "AnswerImage" :"", 
      "IsAnswer": false
    },
    {
		 "ID":5,
      "AnswerText": "पांच ",
	  "AnswerImage" :"", 
      "IsAnswer": false
    }
  ],
  "Weight": 1,
  "Difficulty": null,
  "CreatedOn": "2012-04-23T18:25:43.511Z",
  "IsVerified": false,
  "Explanation" : "New Explanation tests a"
}', getdate())
GO
Update [questionStore] SET Data = JSON_MODIFY(Data,'$.Guid' , convert(nvarchar(36), Guid))
 

 --------------HIndi Single choice  choice

INSERT INTO [dbo].[questionStore]
           ([guid]
           ,[Data],[CreationDate])
     VALUES
           (newID(), N'{  
	"Guid":"updatelater to questionStore.guid",
  "Topic": "",
  "Concept": [ "Concept1", "Concept1"],
  "tags": ["important","1998"],
  "QuestionText": "केवल एक उत्तर का चयन कीजिये  ",
  "QuestionImage":"data:image/png;base64,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",
  "QuestionTypes": {
    "SingleChoice": true,
    "MultiChoice": false
  },
   "Answers":  [ { 
   	 "ID":1,
	 "AnswerText" : "उत्तर एक ***" ,
	 "AnswerImage" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAABFCAIAAABIeNQZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADISURBVHhe7dJBDQAwEAShNXGeK7s25kGCBPZ2UOAiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS5S4SIVLlLhIhUuUuEiFS7SsPs0d+C3fb0nyQAAAABJRU5ErkJggg==" ,
      
      "IsAnswer": true
    },
     {
	 	 "ID":2,
      "AnswerText": "इनपुट उपकरण आपके द्वारा चुनी गई भाषा में वेब पर कहीं भी लिखना आसान बनाता है",
	   "AnswerImage" :"", 
      "IsAnswer": false
    },
     {
	 	 "ID":3,
      "AnswerText": "उत्तर तीन ",
	   "AnswerImage" :"", 
      "IsAnswer": false
    },
    {
		 "ID":4,
      "AnswerText": "चार",
	  "AnswerImage" :"", 
      "IsAnswer": false
    },
    {
		 "ID":5,
      "AnswerText": "पांच ",
	  "AnswerImage" :"", 
      "IsAnswer": false
    }
  ],
  "Weight": 1,
  "Difficulty": null,
  "CreatedOn": "2012-04-23T18:25:43.511Z",
  "IsVerified": false,
   "Explanation" : "New Explanation tests B"
}', getdate())
GO
Update [questionStore] SET Data = JSON_MODIFY(Data,'$.Guid' , convert(nvarchar(36), Guid))
 

------------------------------------------------------------
 
INSERT INTO [dbo].[questionStore]
           ([guid]
           ,[Data],[CreationDate])
     VALUES
           (newID(), N'{  		
"Guid":"updatelater to questionStore.guid",
"Topic": "",
  "Concept": [ "Concept1", "Concept1"],
  "tags": ["important","1998"],
  "QuestionText": "What is your name ?",
  "QuestionImage":"",
  "QuestionTypes": {
    "SingleChoice": false,
    "MultiChoice": true
  },
   "Answers":  [ { 
   	 "ID":1,
	 "AnswerText" : "तुम्हारा नाम क्या है ? **" ,
	 "AnswerImage" : "" ,
      "IsAnswer": true
    },
     {

	 	 "ID":2,
      "AnswerText": "तेरा नाम क्या है ? **",
	   "AnswerImage" :"", 
      "IsAnswer": true
    },
     {
	 	 "ID":3,
      "AnswerText": "क्या है तेरा नाम ? **",
	   "AnswerImage" :"", 
      "IsAnswer": true
    },
    {
		 "ID":4,
      "AnswerText": "क्या नाम ? ",
	  "AnswerImage" :"", 
      "IsAnswer": false
    },
    {
		 "ID":5,
      "AnswerText": "पांच ",
	  "AnswerImage" :"", 
      "IsAnswer": false
    }
  ],
  "Weight": 1,
  "Difficulty": null,
  "CreatedOn": "2012-04-23T18:25:43.511Z",
  "IsVerified": false,
  "Explanation" : "New Explanation CC"
}', getdate())
GO
Update [questionStore] SET Data = JSON_MODIFY(Data,'$.Guid' , convert(nvarchar(36), Guid))
 ------------------------------------------
