import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) {}

  async ngOnInit() {
    const isAuthenticated = await this.authService.isAuthenticated();
    if (isAuthenticated) {
      // Navigate to the protected route or home
      this.router.navigate(['/home']);
    } else {
      // Navigate to the login page
      this.router.navigate(['/login']);
    }
  }
}
