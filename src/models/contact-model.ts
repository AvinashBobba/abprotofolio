export interface ContactModel 
{
    mobileNumber : string;
    email : string;
    socialnetwork : SocialNetwork;
    address : Address;
}

export interface SocialNetwork 
{
    linkedin: string;
    gitHub: string;
    twitter: string;
    stackexchange: string;
}

export interface Address 
{
    firstLine : string;
    secondLine : string;
    postCode : string;
    state : string;
    country : string;
}
