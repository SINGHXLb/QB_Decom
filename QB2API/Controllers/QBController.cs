using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using QB2API.Model;

namespace QB2API.Controllers
{
    
    [Route("api")]
    [ApiController]
    public class QBController : ControllerBase
    {


        [HttpGet("Questions")]
        public List<QuestionModel> Get()
        {
            List<QuestionModel> result = new List<QuestionModel>();
            Model.QBDBContext c = new QBDBContext();

            string result1 = String.Join(",", c.QuestionStores.Select(x => x.Data)); ;
            result1 = "[" + result1 + "]";

            result =
                JsonConvert.DeserializeObject<List<QuestionModel>>(result1);

            //remove answer 
            foreach (QuestionModel quesiton in result)
            {
                quesiton.Explaination = "";
                foreach (Answer ans in quesiton.Answers)
                { ans.IsAnswer = false; }
            }
            return result;
        }

        [HttpGet("UserQuestionSet/{Guid}")]
        public QuestionSetAPIResponseModel UserQuestionSet(Guid Guid)
        {
            QuestionSetAPIResponseModel result = new QuestionSetAPIResponseModel();
            Model.QBDBContext c = new QBDBContext();

            result = c.UserQuestionSets
                .Select(x => new QuestionSetAPIResponseModel
                {
                    Guid = x.Guid,
                    Questions = JsonConvert.DeserializeObject<List<QuestionModel>>(x.Data)
                }).First();

            //DENORMALIZED
            foreach (QuestionModel quesiton in result.Questions)
            {
                if (!quesiton.isSubmitted)
                {
                    foreach (Answer ans in quesiton.Answers)
                    {
                        ans.IsAnswer = false;
                    }
                }
            }
            return result;
        }


        [HttpGet("AnswersExplaination/{Guid}")]
        public AnswersExplain AnswersExplaination(Guid Guid)
        {
            AnswersExplain result = new AnswersExplain();
            List<Answer> answers = new List<Answer>();
            Model.QBDBContext c = new QBDBContext();
            answers = JsonConvert.DeserializeObject<QuestionModel>(
                 c.QuestionStores.Where(x => x.Guid == Guid)!.FirstOrDefault()!.Data)
                .Answers.Where(ans => ans.IsAnswer == true).ToList();
            result.Answers = answers;
            result.Explaination = JsonConvert.DeserializeObject<QuestionModel>(
                 c.QuestionStores.Where(x => x.Guid == Guid)!.FirstOrDefault()!.Data).Explaination;
            //I dont like it but i have no 

            return result;
        }

       


    }
}
