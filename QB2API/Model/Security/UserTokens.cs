namespace QB2API.Model.Security
{
    
    public class UserTokens
    {
        public UserTokens() 
        {
            this.Token= "XXXX";
            this.UserName = "XXXX";
            this.RefreshToken = "XXXX";
            this.Id = "XXXX";
            this.EmailId = "XXXX";

        }
        public string Token
        {
            get;
            set;
        }
        public string UserName
        {
            get;
            set;
        }
        public TimeSpan Validaty
        {
            get;
            set;
        }
        public string RefreshToken
        {
            get;
            set;
        }
        public string  Id
        {
            get;
            set;
        }
        public string EmailId
        {
            get;
            set;
        }
        public Guid Guid
        {
            get;
            set;
        }
        public DateTime ExpiredTime
        {
            get;
            set;
        }
    }
}
