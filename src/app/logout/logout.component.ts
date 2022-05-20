import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../login/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private service: AuthenticateService,
    private router: Router) {

    this.service.logout();

    this.router.navigateByUrl("/login");
  }

  ngOnInit(): void {
  }

}
