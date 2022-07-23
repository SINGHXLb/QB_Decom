using System;
using System.Collections.Generic;

namespace QB2API.Model
{
    public partial class QuestionSet
    {
        public Guid Guid { get; set; }
        public string QuestionSetName { get; set; } = null!;
        public string Data { get; set; } = null!;
        public DateTime? CreationDate { get; set; }
        public string? CreatedBy { get; set; }
    }
}
