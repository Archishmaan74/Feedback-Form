import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {
    path: "", component: FeedbackComponent
  },
  {
    path: "feedback", component: FeedbackComponent
  },
  {
    path: "reviews", component: ReviewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
