import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedback: any = {
    usr: "",
    review: ""
  }
  constructor(private feedbackService : FeedbackService){

  }
  addFeedback(feedback: any){
    console.log(feedback);
    
    if(this.feedback.usr.length==0  || this.feedback.review.length==0){
      alert("Fields are empty!")
    }
    else{

      this.feedbackService.addFeedback(feedback).subscribe(feedback)
      alert("Thanks "+feedback.usr+" for giving your valuable feedback!")
    }
  }
}
