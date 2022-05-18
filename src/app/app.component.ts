import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  baseUrl = environment.apiUrl + 'Users';

  model: any;

  constructor(private http: HttpClient, private accountService: AccountService){}

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  getUsers(){
    this.http.get(this.baseUrl).subscribe(response => {
      this.model = response;
    }, error => {
      console.log(error);
    })
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }
}
