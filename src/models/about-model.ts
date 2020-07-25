import { ContactModel } from "./contact-model";

export interface AboutModel 
{
    profileName : ProfileName;
    contact : ContactModel;
    summary : ProfileSummary;   
}

export interface ProfileName 
{
    firstName : string;
    lastName : string;
}

export interface ProfileSummary
{
    data : string;
}