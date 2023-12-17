import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  feedback: any = []
  constructor(private feedbackService: FeedbackService){
    this.feedbackService.getReviews().subscribe((data)=>{
     this.feedback = data 
    },(err)=>{
      console.log("Cannot fetch data...");
      
    })
  }
}
