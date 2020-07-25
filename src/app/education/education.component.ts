import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../services/load-data.service';
import { EducationModel } from '../../models/education-model';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  loadDataService : LoadDataService ;
  educationDetailsModel : EducationModel;

  constructor(loadDataService : LoadDataService) {
    this.loadDataService = loadDataService;
   }

  ngOnInit(): void {
    this.loadDataService.getEducationDetails().subscribe(data => {
      console.log(data)
      this.educationDetailsModel = data;
    }
    )}
}
