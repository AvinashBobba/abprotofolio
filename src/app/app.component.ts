import { Component,OnInit,AfterViewInit } from '@angular/core';
import { LoadDataService } from '../../src/app/services/load-data.service';
import { AboutModel } from 'src/models/about-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title = 'abprotofolioapp';
  aboutDataService : LoadDataService;
  aboutDataModel : AboutModel;
  constructor(aboutData: LoadDataService){
    this.aboutDataService = aboutData;
  }

  ngOnInit():void{
    this.aboutDataService.getAboutPageData().subscribe(data => {
      this.aboutDataModel = data;
    })
  }
}
