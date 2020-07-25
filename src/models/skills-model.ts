export interface SkillsModel 
{
    skills : Skills[]
}

export interface Skills 
{
    skillType : string,
    programmingLanguages : ProgrammingLanguages[]
}

export interface ProgrammingLanguages
{ 
    name : string
}