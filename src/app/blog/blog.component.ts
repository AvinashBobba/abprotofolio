import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../services/load-data.service';
import { BlogModel } from '../../models/blog-model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  subscriptionMessage : string;
  subscriptionEmail : string;
  loadDataService : LoadDataService;
  blogModel : BlogModel;
  constructor(loadDataService : LoadDataService) {
    this.loadDataService = loadDataService;
   }

  ngOnInit(): void {
    this.loadDataService.getBlogDetails().subscribe(
      data => {
        this.blogModel = data;
      }
    )
  }
  onSubScription()
  {
    this.subscriptionMessage = "Thanks for Subscribing!!"
  }
}
