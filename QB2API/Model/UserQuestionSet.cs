using System;
using System.Collections.Generic;

namespace QB2API.Model
{
    public partial class UserQuestionSet
    {
        public Guid Guid { get; set; }
        public Guid UserGuid { get; set; }
        public Guid QuestionSetGuid { get; set; }
        public string Data { get; set; } = null!;
        public bool IsSubmitted { get; set; }
        public DateTime? CreationDate { get; set; }
        public string? CreatedBy { get; set; }
    }
}
