import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-common-svg-icons',
    imports: [],
    templateUrl: './common-svg-icons.component.html',
    styleUrls: ['./common-svg-icons.component.scss']
})

export class CommonSvgIconsComponent {

  @Input("icons") public icons: any;
  @Input("class") public class: any;

}
