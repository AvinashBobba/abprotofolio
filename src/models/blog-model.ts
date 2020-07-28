export interface BlogModel
{
    blog:Blog[]
}

export interface Blog 
{
    name : string;
    url : string;
    type : string;
    isActive : boolean;
}