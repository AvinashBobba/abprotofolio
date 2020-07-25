export interface ProjectModel 
{
    company : string;
    name : string;
    role : string;
    dateFrom : string;
    dateTo : string;
    summaries : Summary[];
    isActive : boolean;
    isLatest : boolean;
}

export interface Summary 
{
    data : string;
}