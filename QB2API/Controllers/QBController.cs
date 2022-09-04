using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using QB2API.Dto;
using QB2API.Model;

namespace QB2API.Controllers
{

    [Route("api")]
    [ApiController]
    public class QBController : ControllerBase
    {


        [HttpGet("Questions")]
        public List<QuestionModelDTO> Get()
        {
            List<QuestionModelDTO> result = new List<QuestionModelDTO>();
            Model.QBDBContext c = new QBDBContext();

            string result1 = String.Join(",", c.QuestionStores.Select(x => x.Data)); ;
            result1 = "[" + result1 + "]";

            result =
                JsonConvert.DeserializeObject<List<QuestionModelDTO>>(result1);

            //remove answer 
            foreach (QuestionModelDTO quesiton in result)
            {
                quesiton.Explaination = "";
                foreach (AnswerDTO ans in quesiton.Answers)
                { ans.IsAnswer = false; }
            }
            return result;
        }

        [HttpGet("User/{userGUID}/QuestionSet/{questionSetGUID}")]
        public QuestionSetDTO UserQuestionSet(Guid questionSetGUID, Guid userGUID)
        {
            QuestionSetDTO result = new QuestionSetDTO();
            Model.QBDBContext c = new QBDBContext();

            result = c.UserQuestionSets
                .Where(x=> x.QuestionSetGuid == questionSetGUID && x.UserGuid == userGUID)
                .Select(x => new QuestionSetDTO
                {
                    Guid = x.Guid,
                    Questions = JsonConvert.DeserializeObject<List<QuestionModelDTO>>(x.Data)
                }).First();

         
            foreach (QuestionModelDTO quesiton in result.Questions)
            {
                if (!quesiton.isSubmitted)
                {
                    foreach (AnswerDTO ans in quesiton.Answers)
                    {
                        ans.IsAnswer = false;
                    }
                }
            }
            return result;
        }


        [HttpPut("UserQuestionSet")]
        public bool UserQuestionSet([FromBody] UserQuestionSetDTO UserQuestionSet)
        {
            using (var db = new QBDBContext())
            {
                UserQuestionSet uQS 
                    = db.UserQuestionSets.Find(UserQuestionSet.questionSet.Guid);
                if (uQS != null)
                {
                    uQS.Data = JsonConvert.SerializeObject(UserQuestionSet.questionSet.Questions);
                    uQS.IsSubmitted = true;
                    db.SaveChanges();
                }
            }
           return true;
        }
       

        [HttpGet("user/{userGUID}/QuestionSets")]
        public List<UserQuestionSetInfoDTO> UserQuestionSets(Guid userGUID)
        {
            Model.QBDBContext c = new QBDBContext();

            List<Guid> QuestionSetGuids  = c.UserQuestionSets .
                Where(x=>x.UserGuid == userGUID)
                .Select(x => x.QuestionSetGuid).ToList();

            List<UserQuestionSetInfoDTO> questionSets = new List<UserQuestionSetInfoDTO>();
            foreach (Guid QuestionSetGuid in QuestionSetGuids)
            {
                UserQuestionSetInfoDTO questionSet = new UserQuestionSetInfoDTO();
                questionSet.Guid = QuestionSetGuid;
                questionSet.QuestionSetName = 
                c.QuestionSets
                    .Where(x => x.Guid == QuestionSetGuid)
                    .Select(x => x.QuestionSetName).First();

                questionSets.Add(questionSet);
            }
            return questionSets; 
        }



        [HttpGet("AnswersExplaination/{Guid}")]
        public AnswersExplainDTO AnswersExplaination(Guid Guid)
        {
            AnswersExplainDTO result = new AnswersExplainDTO();
            List<AnswerDTO> answers = new List<AnswerDTO>();
            Model.QBDBContext c = new QBDBContext();
            answers = JsonConvert.DeserializeObject<QuestionModelDTO>(
                 c.QuestionStores.Where(x => x.Guid == Guid)!.FirstOrDefault()!.Data)
                .Answers.Where(ans => ans.IsAnswer == true).ToList();
            result.Answers = answers;
            result.Explaination = JsonConvert.DeserializeObject<QuestionModelDTO>(
                 c.QuestionStores.Where(x => x.Guid == Guid)!.FirstOrDefault()!.Data).Explaination;
            //I dont like it but i have no 

            return result;
        }

       


    }
}
