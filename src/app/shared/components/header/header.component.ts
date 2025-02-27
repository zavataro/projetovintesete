import { Component } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonSvgIconsComponent } from '../common-svg-icons/common-svg-icons.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { SearchComponent } from './search/search.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChatComponent } from './chat/chat.component';
import { ModeComponent } from './mode/mode.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterModule, CommonSvgIconsComponent,
        BreadcrumbComponent, SearchComponent, NotificationsComponent,
        ChatComponent, ModeComponent, CartComponent, ProfileComponent],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  public isOpen: boolean = false;

  constructor(public navService: NavService) { }

  closeMenu() {
    this.navService.collapseSidebar = !this.navService.collapseSidebar;
  }

  closeSearch(newItem: boolean) {
    this.isOpen = newItem;
  }
}
