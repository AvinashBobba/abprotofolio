import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../services/load-data.service';
import { SkillsModel } from '../../models/skills-model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  loadDataService : LoadDataService;
  skillModel : SkillsModel;
  constructor(loadDataService : LoadDataService) {
    this.loadDataService = loadDataService;
   }

  ngOnInit(): void {
    this.loadDataService.getSkillsData().subscribe(data => {
      console.log(data)
      this.skillModel = data;
    }
    )
  }

}
