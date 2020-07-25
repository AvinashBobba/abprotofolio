export interface EducationModel {
    educationDetails : EducationDetails[]
}

export interface EducationDetails 
{
    universityName : string,
    specialization : string,
    department : string,
    fromDate : string,
    toDate : string,
    gpa : string
}