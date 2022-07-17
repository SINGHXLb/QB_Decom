using System;
using System.Collections.Generic;

namespace QB2API.Model
{
    public partial class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = null!;
        public string? LastName { get; set; }
        public DateTime Dob { get; set; }
        public string LastUpdatedBy { get; set; } = null!;
        public DateTime LastUpdatedOn { get; set; }
    }
}
