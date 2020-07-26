export interface ProjectModel 
{
    projects : Project[]
}

export interface Project 
{
    company : string;
    name : string;
    role : string;
    dateFrom : string;
    dateTo : string;
    summary : string;
    isActive : boolean;
    isLatest : boolean;
}