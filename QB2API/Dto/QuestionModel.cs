namespace QB2API.Dto
{
    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
    public class AnswerDTO
    {
        public AnswerDTO()
        {
            this.AnswerText=String.Empty;
            this.ID = String.Empty;
            this.AnswerImage = String.Empty;
        }
        public string ID { get; set; }
        public string AnswerText { get; set; }
        public string AnswerImage { get; set; }
        public bool IsAnswer { get; set; }
      

        //client side support  
        public bool IsChecked { get; set; }

    }
    public class AnswersExplainDTO
    {
        public AnswersExplainDTO()
        {
            this.Answers = new List<AnswerDTO>();
            this.Explanation = String.Empty;
        }
        public List<AnswerDTO> Answers { get; set; }
        public string Explanation { get; set; }
    }

    public class QuestionTypesDTO
    {
        public bool SingleChoice { get; set; }
        public bool MultiChoice { get; set; }
    }

    public class QuestionModelDTO
    {
        public QuestionModelDTO()
        {
            this.Topic = String.Empty;
            this.Concept = new List<string>();
            this.tags = new List<string>();
            this.QuestionText = String.Empty;
            this.QuestionImage = String.Empty;
            this.Answers = new List<AnswerDTO>();
            this.Explanation = String.Empty;
           
        }
        public Guid Guid { get; set; }
        public string Topic { get; set; }
        public List<string> Concept { get; set; }
        public List<string> tags { get; set; }
        public string QuestionText { get; set; }
        public string QuestionImage { get; set; }
        public QuestionTypesDTO? QuestionTypes { get; set; }
        public List<AnswerDTO> Answers { get; set; }
        public int? Weight { get; set; }
        public int? Difficulty { get; set; }
        public DateTime? CreatedOn { get; set; }
        public bool IsVerified { get; set; }
        public string Explanation { get; set; }
                       
        //client side support  
        public bool isSubmitted { get; set; }
        public bool isCorrect { get; set; }


    }
    public class UserQuestionSetDTO
    {
        public UserQuestionSetDTO()
        {
            this.questionSet = new  QuestionSetDTO();
            this.UserGuid = String.Empty;
        }
        public QuestionSetDTO questionSet { get; set; }
        public string UserGuid { get; set; }
    }

    public class QuestionSetDTO
    {
        public QuestionSetDTO()
        {
            Questions = new List<QuestionModelDTO>();
        }
        public Guid Guid { get; set; }
        public List<QuestionModelDTO> Questions { get; set; }
    }

    public class UserQuestionSetInfoDTO
    {
        public Guid Guid { get; set; }
        public string QuestionSetName { get; set; } = null!;
        public string Data { get; set; } = null!;
        public DateTime? CreationDate { get; set; }
        public string? CreatedBy { get; set; }
    }
}
