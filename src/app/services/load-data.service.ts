import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { ContactModel } from '../../models/contact-model';
import { AboutModel } from '../../models/about-model';
import {  tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  httpClient : HttpClient;
  constructor(httpClient : HttpClient) { 
    this.httpClient = httpClient;
  }

getAboutPageData(){
  var file = "https://abprotofolio.blob.core.windows.net/content/about-profile.json";
  return this.httpClient
   .get<any>(file)
   .pipe(tap(
     data => {
       console.log(data);
     },
     error => {
       console.log(error);
     }
   ));
}

getExperienceData(){
  var file = "https://abprotofolio.blob.core.windows.net/content/projects.json";
  return this.httpClient
   .get<any>(file)
   .pipe(tap(
     data => {
       console.log(data);
     },
     error => {
       console.log(error);
     }
   ));
}

getSkillsData(){
  var file = "https://abprotofolio.blob.core.windows.net/content/skill.json";
  return this.httpClient
   .get<any>(file)
   .pipe(tap(
     data => {
       console.log(data);
     },
     error => {
       console.log(error);
     }
   ));
}

getEducationDetails(){
  var file = "https://abprotofolio.blob.core.windows.net/content/education.json";
  return this.httpClient
   .get<any>(file)
   .pipe(tap(
     data => {
       console.log(data);
     },
     error => {
       console.log(error);
     }
   ));
}
}

