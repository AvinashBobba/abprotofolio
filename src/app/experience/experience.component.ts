import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../services/load-data.service';
import { ProjectModel } from '../../models/projects-model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  loadDataService : LoadDataService;
  projectModel : ProjectModel;

  constructor(loadDataService : LoadDataService) { 
    this.loadDataService = loadDataService;
  }

  ngOnInit(): void {
    this.loadDataService.getExperienceData().subscribe(
      data => {
        this.projectModel=data;
      }
    )
  }

}
