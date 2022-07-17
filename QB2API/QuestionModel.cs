namespace QB2API
{
    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
    public class Answer
    {
        public string ID { get; set; }
        public string AnswerText { get; set; }
        public string  AnswerImage { get; set; } 
        public bool IsAnswer { get; set; }

        
        //client side support  
        public bool IsChecked { get; set; }

    }

    public class QuestionTypes
    {
        public bool SingleChoice { get; set; }
        public bool MultiChoice { get; set; }
    }

    public class QuestionModel
    {
       
        public string Topic { get; set; }
        public List<string> Concept { get; set; }
        public List<string> tags { get; set; }
        public string QuestionText { get; set; }
        public string QuestionImage { get; set; }
        public QuestionTypes? QuestionTypes { get; set; }
        public List<Answer> Answers { get; set; }
        public int? Weight { get; set; }
        public int? Difficulty { get; set; }
        public DateTime? CreatedOn { get; set; }
        public bool IsVerified { get; set; }

        //client side support  
        public bool  isSubmitted { get; set; }
        public bool isCorrect { get; set; }


    }

    public class QuestionAPIResponseModel 
       {
        public Guid Guid { get; set; }
        public QuestionModel Question { get; set; }
    }


}
