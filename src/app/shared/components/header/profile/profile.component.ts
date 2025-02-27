import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonSvgIconsComponent } from '../../common-svg-icons/common-svg-icons.component';

@Component({
    selector: 'app-profile',
    imports: [CommonSvgIconsComponent, RouterModule],
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {

  public isProfile : boolean = false;

  constructor(public router: Router) {}


  logOut() {
    localStorage.clear();
    this.router.navigateByUrl("/auth/login");
  }

}
