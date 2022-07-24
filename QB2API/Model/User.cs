using System;
using System.Collections.Generic;

namespace QB2API.Model
{
    public partial class User
    {
        public Guid Guid { get; set; }
        public string Email { get; set; } = null!;
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsAdmin { get; set; }
        public DateTime? Dob { get; set; }
        public string LastUpdatedBy { get; set; } = null!;
        public DateTime LastUpdatedOn { get; set; }
    }
}
