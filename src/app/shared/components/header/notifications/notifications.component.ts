import { Component } from '@angular/core';
import { CommonSvgIconsComponent } from '../../common-svg-icons/common-svg-icons.component';

@Component({
    selector: 'app-notifications',
    imports: [CommonSvgIconsComponent],
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss']
})

export class NotificationsComponent {

  public isNotifications : boolean = false;

}
