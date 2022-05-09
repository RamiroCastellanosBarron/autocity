import { Review } from './../models/review.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  baseUrl = 'https://localhost:7126/api/Reviews';

  constructor(
    private http: HttpClient
  ) { }

  getAllReviews() {
    return this.http.get(this.baseUrl + '/');
  }

  getReviewsByShopId(id: string) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  updateReview(review: Review) {
    return this.http.put(this.baseUrl + '/' + review.id, review);
  }

  postReview(model: any) {
    return this.http.post(this.baseUrl, model);
  }

  deleteReview(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
