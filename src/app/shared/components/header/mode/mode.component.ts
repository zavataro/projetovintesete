import { Component } from '@angular/core';
import { LayoutService } from '../../../../shared/services/layout.service';
import { CommonSvgIconsComponent } from '../../common-svg-icons/common-svg-icons.component';

@Component({
    selector: 'app-mode',
    imports: [CommonSvgIconsComponent],
    templateUrl: './mode.component.html',
    styleUrls: ['./mode.component.scss']
})

export class ModeComponent {

  public dark: boolean = this.layout.config.settings.layout_version == "dark-only" ? true : false;

  constructor(public layout: LayoutService) { }

  layoutToggle() {
    this.dark = !this.dark;
    this.dark ? document.body.classList.add("dark-only") : document.body.classList.remove("dark-only");
    this.layout.config.settings.layout_version = this.dark ? "dark-only" : "light-only";
  }

}
