import { Component, Input } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
    selector: 'app-svg-icons',
    imports: [],
    templateUrl: './svg-icons.component.html',
    styleUrls: ['./svg-icons.component.scss']
})

export class SvgIconsComponent {

  @Input("icons") public icons: any;

  constructor(public layoutService: LayoutService){}
  
  getSvgType() {
    return document.getElementsByClassName("sidebar-wrapper")[0].getAttribute("icons") == "stroke-svg";
  }

}
