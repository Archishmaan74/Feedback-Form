import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient: HttpClient){

  }

  getReviews(){
    return this.httpClient.get("http://localhost:3000/displayfeedback")
  }

  addFeedback(feedback: any){
    return this.httpClient.post("http://localhost:3000/feedback",feedback)
  }
}
