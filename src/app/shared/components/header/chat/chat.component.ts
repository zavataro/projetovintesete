import { Component } from '@angular/core';
import { CommonSvgIconsComponent } from '../../common-svg-icons/common-svg-icons.component';

@Component({
    selector: 'app-chat',
    imports: [CommonSvgIconsComponent],
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})

export class ChatComponent {

  public isChat: boolean = false;
  
}
