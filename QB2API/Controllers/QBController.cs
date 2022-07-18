using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using QB2API.Model;

namespace QB2API.Controllers
{
    [ApiController]

    [Route("api/Questions")]
    public class QBController : ControllerBase
    {

        [HttpGet("First")]

        public List<QuestionAPIResponseModel>   First()
        {

            List<QuestionAPIResponseModel> result = new List<QuestionAPIResponseModel>();
            Model.QBDBContext c = new QBDBContext();
            result.Add(c.QuestionStores.Select (x => 
            new QuestionAPIResponseModel { Guid=x.Guid , Question = JsonConvert.DeserializeObject<QuestionModel>(x.Data) } ).ToList().FirstOrDefault());
            return result; 
        }

        [HttpGet("Next/{skip}")]

        public List<QuestionAPIResponseModel> Next(int skip)
        {
            List<QuestionAPIResponseModel> result = new List<QuestionAPIResponseModel>();
            Model.QBDBContext c = new QBDBContext();
            result.Add(c.QuestionStores.Skip(skip).Select(x =>
           new QuestionAPIResponseModel { Guid = x.Guid, Question = JsonConvert.DeserializeObject<QuestionModel>(x.Data) }).ToList().FirstOrDefault());
            return result;
        }


        [HttpGet("")]
        public List<QuestionAPIResponseModel> Get()
        {
            List<QuestionAPIResponseModel> result = new List<QuestionAPIResponseModel>();
            Model.QBDBContext c = new QBDBContext();
            result = c.QuestionStores.Select(x => new QuestionAPIResponseModel  { Guid=x.Guid, Question= JsonConvert.DeserializeObject<QuestionModel>(x.Data) }).ToList();
            //remove answer 
            foreach (QuestionAPIResponseModel quesiton in result) 
            {
                foreach (Answer ans in quesiton.Question.Answers)
                { ans.IsAnswer = false; }
            }
            return result;
        }

        [HttpGet("CorrectAnswer/{Guid}")]
        public List<Answer> CorrectAnswer(Guid Guid)
        {

            List<Answer> result = new List<Answer>();

            Model.QBDBContext c = new QBDBContext();

            result =  JsonConvert.DeserializeObject<QuestionModel> (
                 c.QuestionStores.Where(x => x.Guid == Guid)!.FirstOrDefault()!.Data)
                .Answers.Where(ans => ans.IsAnswer == true).ToList();
            return result;
        }

    }
}
