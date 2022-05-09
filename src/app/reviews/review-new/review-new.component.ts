import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ReviewService } from './../../services/review.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-new',
  templateUrl: './review-new.component.html',
  styleUrls: ['./review-new.component.css']
})
export class ReviewNewComponent implements OnInit {
  model: any = {};

  constructor(
    private reviewService: ReviewService,
    private router:Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  postReview(){
    this.reviewService.postReview(this.model).subscribe(response => {
      this.toastr.success('Review added successfully');
      this.router.navigateByUrl('/Shops');
    }, error => {
      console.log(error);
      this.toastr.error('An error occurred posting the review');
    })
  }

}
