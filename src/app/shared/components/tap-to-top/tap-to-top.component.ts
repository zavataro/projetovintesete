import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FeatherIconsComponent } from '../feather-icons/feather-icons.component';

@Component({
    selector: 'app-tap-to-top',
    imports: [FeatherIconsComponent, CommonModule],
    templateUrl: './tap-to-top.component.html',
    styleUrl: './tap-to-top.component.scss'
})

export class TapToTopComponent {

  public show: boolean = false;

  constructor(private viewScroller: ViewportScroller) {}

  ngOnInit(): void {}

  @HostListener("window:scroll", [])

  onWindowScroll() {
    let number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 600) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  tapToTop() {
    this.viewScroller.scrollToPosition([0, 0]);
  }

}
