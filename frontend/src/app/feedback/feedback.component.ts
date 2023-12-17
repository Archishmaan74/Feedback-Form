import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedback: any = {}
  constructor(private feedbackService : FeedbackService){

  }
  addFeedback(feedback: any){
     this.feedbackService.addFeedback(feedback).subscribe(feedback)
     alert("Thanks "+feedback.usr+" for giving your valuable feedback!")
  }
}
