import { Review } from '../_models/review.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  baseUrl = environment.apiUrl;


  constructor(
    private http: HttpClient
  ) { }

  getAllReviews() {
    return this.http.get(this.baseUrl + 'Reviews/');
  }

  getReviewsByShopId(id: string) {
    return this.http.get(this.baseUrl + 'Reviews/' + id);
  }

  updateReview(review: Review) {
    return this.http.put(this.baseUrl + 'Reviews/' + review.id, review);
  }

  postReview(model: any) {
    return this.http.post(this.baseUrl + 'Reviews', model);
  }

  deleteReview(id: string) {
    return this.http.delete(this.baseUrl + 'Reviews/' + id);
  }
}
