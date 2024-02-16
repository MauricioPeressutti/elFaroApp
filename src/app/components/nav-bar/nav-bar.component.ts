import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/util/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  user: any;

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    const json = localStorage.getItem('user');
    if (json !== null) {
      this.user = JSON.parse(json);
    } else {
      this.authService.logout();
    }
  }

}
